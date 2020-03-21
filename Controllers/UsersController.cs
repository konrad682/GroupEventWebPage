using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GruopEventPage.Services;
using GruopEventPage.Models;
using GruopEventPage.Entities;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using GruopEventPage.Helpers;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System;

namespace GruopEventPage.Controllers
{
	[Authorize]
	[ApiController]
	[Route("[controller]")]
	public class UsersController : ControllerBase
	{
		private IUserService _userService;
		private IMapper _mapper;
		private readonly AppSettings _appSettings;

		public UsersController(IUserService userService, IMapper mapper, IOptions<AppSettings> appSettings)
		{
			_userService = userService;
			_mapper = mapper;
			_appSettings = appSettings.Value;
		}

		[AllowAnonymous]
		[HttpPost("authenticate")]
		public async Task<IActionResult> Authenticate([FromBody]AuthenticateModel model)
		{
			var user = await _userService.Authenticate(model.Username, model.Password);

			if (user == null)
			{
				return BadRequest(new { message = "Username or password is incorrect" });
			}

			// authentication successful
			var tokenHandler = new JwtSecurityTokenHandler();
			var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(new Claim[]
				{
					new Claim(ClaimTypes.Name, user.UserID.ToString()),
					new Claim(ClaimTypes.Role, user.Role)
				}),
				Expires = DateTime.UtcNow.AddDays(7),
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
			};

			var token = tokenHandler.CreateToken(tokenDescriptor);
			//user.Token = tokenHandler.WriteToken(token);
			var tokenString = tokenHandler.WriteToken(token);

			return Ok(new
			{
				Id = user.UserID,
				Username = user.Username,
				FirstName = user.FirstName,
				LastName = user.LastName,
				Token = tokenString
			});
		}

		[AllowAnonymous]
		[HttpPost("register")]
		public IActionResult Register([FromBody]RegisterModel model)
		{
			var user = _mapper.Map<User>(model);

			try
			{
				_userService.Create(user, model.Password);
				return Ok();
			}
			catch(AppException ex)
			{
				return BadRequest(new { meessage = ex.Message });
			}
		}

		[Authorize(Roles = Role.Admin)]
		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var users = await _userService.GetAll();
			var model = _mapper.Map<IList<UserModel>>(users);
			return Ok(model);
		}

		[HttpGet("{id}")]
		public IActionResult GetById(int id)
		{
			var currentUserID = int.Parse(User.Identity.Name);
			if (id != currentUserID && !User.IsInRole(Role.Admin))
				return Forbid();

			var user = _userService.GetById(id);

			if (user == null) return NotFound();

			return Ok(user);
		}
	}
}
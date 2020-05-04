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
using System.Collections.Generic;

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
		public IActionResult Authenticate([FromBody]AuthenticateModel model)
		{
			var user = _userService.Authenticate(model.Username, model.Password);

			if (user == null)
			{
				return BadRequest(new { message = "Username or password is incorrect" });
			}

			user.Role = Role.User;

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
				return BadRequest(new { message = ex.Message.ToString() });
			}
		}

		[HttpGet]
		public IActionResult GetAll()
		{
			var users = _userService.GetAll();
			var model = _mapper.Map<IList<UserModel>>(users);
			return Ok(model);
		}

		[HttpGet("{id}")]
		public IActionResult GetById(int id)
		{
			var user = _userService.GetById(id);
			var model = _mapper.Map<UserModel>(user);
			return Ok(model);
		}

		[HttpPut("{id}")]
		public IActionResult Update(int id, [FromBody]UpdateModel model)
		{
			// map model to entity and set id
			var user = _mapper.Map<User>(model);
			user.UserID = id;

			try
			{
				// update user 
				_userService.Update(user, model.Password);
				return Ok();
			}
			catch (AppException ex)
			{
				// return error message if there was an exception
				return BadRequest(new { message = ex.Message.ToString() });
			}
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			_userService.Delete(id);
			return Ok();
		}
	}
}
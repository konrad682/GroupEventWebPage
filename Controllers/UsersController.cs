using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GruopEventPage.Services;
using GruopEventPage.Models;
using GruopEventPage.Entities;
using Microsoft.AspNetCore.Authorization;

namespace GruopEventPage.Controllers
{
	[Authorize]
	[ApiController]
	[Route("[controller]")]
	public class UsersController : ControllerBase
	{
		private IUserService _userService;

		public UsersController(IUserService userService)
		{
			_userService = userService;
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
			return Ok(user);
		}

		[Authorize(Roles = Role.Admin)]
		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var users = await _userService.GetAll();
			return Ok(users);
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
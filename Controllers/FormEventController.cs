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
using GruopEventPage.Models.EventForms;

namespace GruopEventPage.Controllers
{
	[Authorize]
	[ApiController]
	[Route("[controller]")]
	public class FormEventController : ControllerBase
	{

		private IUserService _userService;
		private IMapper _mapper;
		private readonly AppSettings _appSettings;

		public FormEventController(IUserService userService, IMapper mapper, IOptions<AppSettings> appSettings)
		{
			_userService = userService;
			_mapper = mapper;
			_appSettings = appSettings.Value;
		}

		[AllowAnonymous]
		[HttpPost("createEventForm")]
		public IActionResult CreateForm([FromBody]EventFormModel model)
		{
			var formEvent = _mapper.Map<EventForm>(model);
			try
			{
				//_userService.Create(user, model.Password);
				return Ok();
			}
			catch (AppException ex)
			{
				return BadRequest(new { meessage = ex.Message });
			}
		}

	}
}

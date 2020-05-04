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

		private IFormEventService _formEventService;
		private IMapper _mapper;
		private readonly AppSettings _appSettings;

		public FormEventController(IFormEventService formEventService, IMapper mapper, IOptions<AppSettings> appSettings)
		{
			_formEventService = formEventService;
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
				_formEventService.CreateFormEvent(formEvent, model.kindEvent);
				return Ok();
			}
			catch (AppException ex)
			{
				return BadRequest(new { meessage = ex.Message.ToString() });
			}
		}

		[HttpGet("{kindEvent}/{idEvent}/{idUser}")]
		public IActionResult AssignUserAndEventForm(int idEvent, int idUser, string kindEvent)
		{
			try
			{
				_formEventService.AssignUserAndEventForm(idEvent, idUser, kindEvent);
				return Ok();
			}
			catch( AppException ex)
			{
				return BadRequest(new { message = ex.Message.ToString() });
			}
		}

		[HttpGet("getForms/{kindEvent}")]
		public IActionResult GetFormsAll(string kindEvent)
		{
			var formsEvent = _formEventService.GetAllFormsEvent(kindEvent);
			var model = _mapper.Map<IList<EventFormModelFull>>(formsEvent);
			return Ok(model);
		}

		[HttpGet("{kindEvent}/{id}")]
		public IActionResult GetFormById(int id, string kindEvent)
		{
			var formEvent = _formEventService.GetFormById(id, kindEvent);
			var model = _mapper.Map<EventFormModelFull>(formEvent);
			return Ok(model);
		}

		[HttpPut("{kindEvent}/{id}")]
		public IActionResult UpdateForm(int id, string kindEvent, [FromBody]UpdateFormModel model)
		{
			// map model to entity and set id
			var formEvent = _mapper.Map<EventForm>(model);
			formEvent.EventID = id;

			try
			{
				// update user 
				_formEventService.UpdateFormEvent(formEvent, kindEvent);
				return Ok();
			}
			catch (AppException ex)
			{
				// return error message if there was an exception
				return BadRequest(new { message = ex.Message.ToString() });
			}
		}

		[HttpDelete("{kindEvent}/{id}")]
		public IActionResult DeleteForm(int id, string kindEvent)
		{
			_formEventService.DeleteFormEvent(id, kindEvent);
			return Ok();
		}

		[HttpGet("{userID}")]
		public IActionResult getAllFormsEventForUser(int userID)
		{
			var formsEvent = _formEventService.GetAllFormsEventForUser(userID);
			var model = _mapper.Map<IList<EventFormModelFull>>(formsEvent);
			return Ok(model);
		}
	}
}

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
				return BadRequest(new { meessage = ex.Message });
			}
		}

		[HttpGet]
		public IActionResult GetFormsAll()
		{
			var formsEvent = _formEventService.GetAllFormsEvent();
			var model = _mapper.Map<IList<EventFormModelFull>>(formsEvent);
			return Ok(model);
		}

		[HttpGet("{id}")]
		public IActionResult GetFormById(int id)
		{
			var formEvent = _formEventService.GetFormById(id);
			var model = _mapper.Map<EventFormModel>(formEvent);
			return Ok(model);
		}

		[HttpPut("{id}")]
		public IActionResult UpdateForm(int id, [FromBody]UpdateModel model)
		{
			// map model to entity and set id
			var formEvent = _mapper.Map<EventForm>(model);
			formEvent.EventID = id;

			try
			{
				// update user 
				_formEventService.UpdateFormEvent(formEvent);
				return Ok();
			}
			catch (AppException ex)
			{
				// return error message if there was an exception
				return BadRequest(new { message = ex.Message });
			}
		}

		[HttpDelete("{id}")]
		public IActionResult DeleteForm(int id)
		{
			_formEventService.DeleteFormEvent(id);
			return Ok();
		}

	}
}

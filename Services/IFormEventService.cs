using System;
using System.Collections.Generic;
using GruopEventPage.Entities;

namespace GruopEventPage.Services
{
	public interface IFormEventService
	{
		IEnumerable<EventForm> GetAllFormsEvent();
		EventForm GetFormById(int id);
		EventForm CreateFormEvent(EventForm eventForm, string kindEvent);
		void UpdateFormEvent(EventForm EventForm);
		void DeleteFormEvent(int id);
	}
}

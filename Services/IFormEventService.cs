using System;
using System.Collections.Generic;
using GruopEventPage.Entities;

namespace GruopEventPage.Services
{
	public interface IFormEventService
	{
		IEnumerable<EventForm> GetAllFormsEvent();
		EventForm GetFormById(int id, string kindEvent);
		EventForm CreateFormEvent(EventForm eventForm, string kindEvent);
		void UpdateFormEvent(EventForm EventForm, string kindEvent);
		void DeleteFormEvent(int id, string kindEvent);
		void AssignUserAndEventForm(int idEvent, int idUser, string kindEvent);
		IEnumerable<EventForm> GetAllFormsEventForUser(int userID);
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GruopEventPage.Entities;
using GruopEventPage.Helpers;

namespace GruopEventPage.Services
{
	public class FromEventService : IFormEventService
	{
		private DataContext _context;
		public FromEventService(DataContext context)
		{
			_context = context;
		}

		public EventForm CreateFormEvent(EventForm eventForm, string kindEvent)
		{
			eventForm.NumbersOfCurrentParticipants = 0;
			switch (kindEvent) 
			{
				case "football":
					_context.EventFormFootball.Add(eventForm);
					break;
			}
			_context.SaveChanges();

			return eventForm;
		}

		public void DeleteFormEvent(int id, string kindEvent)
		{
			var eventForm = _context.EventFormFootball.Find(id);
			if (eventForm != null)
			{
				switch (kindEvent)
				{
					case "football":
						_context.EventFormFootball.Remove(eventForm);
						break;
					default:
						throw new Exception("don't find datebase");
				}
				_context.SaveChanges();
			}
		}

		public IEnumerable<EventForm> GetAllFormsEvent()
		{
			return _context.EventFormFootball;
		}

		public EventForm GetFormById(int id, string kindEvent)
		{
			EventForm eventForm = null;
			switch (kindEvent)
			{
				case "football":
					eventForm = _context.EventFormFootball.Find(id);
					break;
				default:
					throw new Exception("don't find datebase");
			}
			return eventForm;
		}

		public void UpdateFormEvent(EventForm EventForm, string kindEvent)
		{
			var form = _context.EventFormFootball.Find(EventForm.EventID);

			if (form == null || EventForm == null)
				throw new AppException("Form not found");

			form.DateEvent = EventForm.DateEvent;
			form.NameEvent = EventForm.NameEvent;
			form.DescEvent = EventForm.DescEvent;
			form.TimeEvent = EventForm.TimeEvent;
			form.PlaceEvent = EventForm.PlaceEvent;
			form.NumberPlacesEvent = EventForm.NumberPlacesEvent;


			_context.EventFormFootball.Update(form);
			_context.SaveChanges();
		}
	}
}

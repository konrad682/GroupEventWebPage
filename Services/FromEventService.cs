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
			switch (kindEvent) 
			{
				case "football":
					_context.EventFormFootball.Add(eventForm);
					break;
			}
			_context.SaveChanges();

			return eventForm;
		}

		public void DeleteFormEvent(int id)
		{
			var eventForm = _context.EventFormFootball.Find(id);
			if (eventForm != null)
			{
				_context.EventFormFootball.Remove(eventForm);
				_context.SaveChanges();
			}
		}

		public IEnumerable<EventForm> GetAllFormsEvent()
		{
			return _context.EventFormFootball;
		}

		public EventForm GetFormById(int id)
		{
			return _context.EventFormFootball.Find(id);
		}

		public void UpdateFormEvent(EventForm EventForm)
		{
			throw new NotImplementedException();
		}
	}
}

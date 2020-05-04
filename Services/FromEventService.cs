using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GruopEventPage.Entities;
using GruopEventPage.Helpers;
using Microsoft.EntityFrameworkCore;

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

		public IEnumerable<EventForm> GetAllFormsEventForUser(int userID)
		{
			IList<UserFootballEvent> forms;

			var findUser = _context.Users.Where(x => x.UserID == userID).Include(x => x.UserFootballEvent).ThenInclude(x => x.EventForm).ToList();
			if (findUser.First().UserFootballEvent == null)
			{
				throw new AppException("User dosnt have any events");
			}
			forms = findUser.First().UserFootballEvent;

			IList<EventForm> eventForms = new List<EventForm>();

			foreach (var form in forms)
			{
				eventForms.Add(form.EventForm);
			}
			return eventForms;
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

		public void AssignUserAndEventForm(int idEvent, int idUser, string kindEvent)
		{
			var formEvent = _context.EventFormFootball.Find(idEvent);
			var user = _context.Users.Find(idUser);

			VerifyIfUserIsAssignToEvent(formEvent, user);

			_context.UserFootballEvent.Add(new UserFootballEvent
			{
				User = user,
				EventForm = formEvent
			});
			_context.SaveChanges();
			formEvent.NumbersOfCurrentParticipants += 1;
			_context.EventFormFootball.Update(formEvent);
			_context.SaveChanges();
		}

		private void VerifyIfUserIsAssignToEvent(EventForm formEvent, User user)
		{
			IList<UserFootballEvent> forms;

			var findUser = _context.Users.Where(x => x.UserID == user.UserID).Include(x => x.UserFootballEvent).ThenInclude(x => x.EventForm).ToList();
			if(findUser.First().UserFootballEvent == null)
			{
				return;
			}
			forms = findUser.First().UserFootballEvent;

			foreach (var form in forms)
			{
				if (form.EventForm.EventID == formEvent.EventID)
				{
					throw new AppException("User is assign to this event");
				}
			}
		}
	}
}

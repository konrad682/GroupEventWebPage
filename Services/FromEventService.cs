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
			eventForm.KindEvent = kindEvent;

			switch (kindEvent) 
			{
				case "football":
					_context.EventFormFootball.Add(eventForm);
					break;
				//case "concert":
				//	_context.EventFormConcert.Add(eventForm);
				//	break;
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
					//case "concert":
					//	_context.EventFormConcert.Remove(eventForm);
					//	break;
					default:
						throw new Exception("don't find datebase");
				}
				_context.SaveChanges();
			}
		}

		public IEnumerable<EventForm> GetAllFormsEvent(string kindEvent)
		{
			switch (kindEvent)
			{
				case "football":
					return _context.EventFormFootball;
				//case "concert":
				//	return _context.EventFormConcert;
				default:
					throw new Exception("don't find datebase");
			}
		}

		public IEnumerable<EventForm> GetAllFormsEventForUser(int userID)
		{
			List<EventForm> resultEventForms = new List<EventForm>();

			resultEventForms.AddRange(getListOfFootballEventsForUser(userID));
			//resultEventForms.AddRange(getListOfConcertEventsForUser(userID));

			return resultEventForms;
		}

		private IList<EventForm> getListOfFootballEventsForUser(int userID)
		{
			IList<EventForm> eventForms = new List<EventForm>();
			IList<UserFootballEvent> formsFootballEvents;
			var findUserAssignToFootball = _context.Users.Where(x => x.UserID == userID).Include(x => x.UserFootballEvent).ThenInclude(x => x.EventForm).ToList();
			if (findUserAssignToFootball.First().UserFootballEvent == null)
			{
				return null;
			}
			formsFootballEvents = findUserAssignToFootball.First().UserFootballEvent;

			foreach (var form in formsFootballEvents)
			{
				eventForms.Add(form.EventForm);
			}

			return eventForms;
		}

		//private IList<EventForm> getListOfConcertEventsForUser(int userID)
		//{
		//	IList<EventForm> eventForms = new List<EventForm>();
		//	IList<UserConcertEvent> formsConcertEvents;

		//	var findUserAssignToConcert = _context.Users.Where(x => x.UserID == userID).Include(x => x.UserConcertEvent).ThenInclude(x => x.EventForm).ToList();
		//	if (findUserAssignToConcert.First().UserConcertEvent == null)
		//	{
		//		return null;
		//	}
		//	formsConcertEvents = findUserAssignToConcert.First().UserConcertEvent;

		//	foreach (var form in formsConcertEvents)
		//	{
		//		eventForms.Add(form.EventForm);
		//	}

		//	return eventForms;
		//}

		public EventForm GetFormById(int id, string kindEvent)
		{
			EventForm eventForm = null;
			switch (kindEvent)
			{
				case "football":
					eventForm = _context.EventFormFootball.Find(id);
					break;
				case "concert":
					//eventForm = _context.EventFormConcert.Find(id);
					break;
				default:
					throw new Exception("don't find datebase");
			}
			return eventForm;
		}

		public void UpdateFormEvent(EventForm EventForm, string kindEvent)
		{
			EventForm form;
			switch (kindEvent)
			{
				case "football":
					form = _context.EventFormFootball.Find(EventForm.EventID);
					break;
				//case "concert":
				//	//form = _context.EventFormConcert.Find(EventForm.EventID);
				//	break;
				default:
					throw new Exception("don't find datebase");
			}

			if (form == null || EventForm == null)
				throw new AppException("Form not found");

			form.DateEvent = EventForm.DateEvent;
			form.NameEvent = EventForm.NameEvent;
			form.DescEvent = EventForm.DescEvent;
			form.TimeEvent = EventForm.TimeEvent;
			form.PlaceEvent = EventForm.PlaceEvent;
			form.NumberPlacesEvent = EventForm.NumberPlacesEvent;

			switch (kindEvent)
			{
				case "football":
					_context.EventFormFootball.Update(form);
					break;
				case "concert":
					//_context.EventFormConcert.Update(form);
					break;
			}
			_context.SaveChanges();
		}

		public void AssignUserAndEventForm(int idEvent, int idUser, string kindEvent)
		{
			switch (kindEvent)
			{
				case "football":
					AssingUserToFootballEvent(idEvent, idUser);
					break;
				case "concert":
					//AssingUserToConcertEvent(idEvent, idUser);
					break;
			}
			_context.SaveChanges();
		}

		private void AssingUserToFootballEvent(int idEvent, int idUser)
		{
			var formEvent = _context.EventFormFootball.Find(idEvent);
			var user = _context.Users.Find(idUser);

			VerifyIfUserIsAssignToFootballEvent(formEvent, user);

			if (formEvent.NumberPlacesEvent + 1 < formEvent.NumbersOfCurrentParticipants)
			{
				throw new AppException("User cannot join to event. No vacancies");
			}

			formEvent.NumbersOfCurrentParticipants += 1;

			_context.UserFootballEvent.Add(new UserFootballEvent
			{
				User = user,
				EventForm = formEvent
			});
			_context.SaveChanges();

			_context.EventFormFootball.Update(formEvent);
		}

		//private void AssingUserToConcertEvent(int idEvent, int idUser)
		//{
		//	//var formEvent = _context.EventFormConcert.Find(idEvent);
		//	var user = _context.Users.Find(idUser);


		//	VerifyIfUserIsAssignToConcertEvent(formEvent, user);

		//	if (formEvent.NumberPlacesEvent + 1 > formEvent.NumbersOfCurrentParticipants)
		//	{
		//		throw new AppException("User cannot join to event");
		//	}

		//	formEvent.NumbersOfCurrentParticipants += 1;

		//	//_context.UserConcertEvent.Add(new UserFootballEvent
		//	//{
		//	//	User = user,
		//	//	EventForm = formEvent
		//	//});
		//	_context.SaveChanges();
		//	formEvent.NumbersOfCurrentParticipants += 1;
		//	_context.EventFormConcert.Update(formEvent);
		//}

		private void VerifyIfUserIsAssignToFootballEvent(EventForm formEvent, User user)
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

		//private void VerifyIfUserIsAssignToConcertEvent(EventForm formEvent, User user)
		//{
		//	IList<UserConcertEvent> forms;

		//	var findUser = _context.Users.Where(x => x.UserID == user.UserID).Include(x => x.UserConcertEvent).ThenInclude(x => x.EventForm).ToList();
		//	if (findUser.First().UserConcertEvent == null)
		//	{
		//		return;
		//	}
		//	forms = findUser.First().UserConcertEvent;

		//	foreach (var form in forms)
		//	{
		//		if (form.EventForm.EventID == formEvent.EventID)
		//		{
		//			throw new AppException("User is assign to this event");
		//		}
		//	}
		//}
	}
}

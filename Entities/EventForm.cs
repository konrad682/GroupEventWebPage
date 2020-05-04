using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace GruopEventPage.Entities
{
	public class EventForm
	{
		[Key]
		public int EventID { get; set; }
		public string NameEvent { get; set; }
		public string DateEvent { get; set; }
		public string PlaceEvent { get; set; }
		public string DescEvent { get; set; }
		public string Organizer { get; set; }
		public string TimeEvent { get; set; }
		public int NumberPlacesEvent { get; set; }
		public int NumbersOfCurrentParticipants { get; set; }
		public IList<UserFootballEvent> UserFootballEvent { get; set; }
	}
}

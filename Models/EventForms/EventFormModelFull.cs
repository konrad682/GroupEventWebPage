using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GruopEventPage.Models.EventForms
{
	public class EventFormModelFull
	{
		public int eventID { get; set; }
		public string nameEvent { get; set; }
		public string dateEvent { get; set; }
		public string placeEvent { get; set; }
		public string descEvent { get; set; }
		public string organizer { get; set; }
		public string kindEvent { get; set; }
		public string timeEvent { get; set; }
		public int numberPlacesEvent { get; set; }
		public int numbersOfCurrentParticipants { get; set; }
	}
}

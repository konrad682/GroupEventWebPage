using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GruopEventPage.Entities
{
	public class EventForm
	{
		public int eventID { get; set; }
		public string nameEvent { get; set; }
		public string dateEvent { get; set; }
		public string pleaceEvent { get; set; }
		public string descEvent { get; set; }
		public string kindEvent { get; set; }
		public string organizer { get; set; }
		public User[] userList { get; set; }
	}
}

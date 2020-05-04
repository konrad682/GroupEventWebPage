using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GruopEventPage.Entities
{
	public class UserFootballEvent
	{
		public int UserID { get; set; }
		public User User { get; set; }
		public int EventID { get; set; }
		public EventForm EventForm { get; set; }
	}
}

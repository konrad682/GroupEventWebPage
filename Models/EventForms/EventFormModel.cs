using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace GruopEventPage.Models.EventForms
{
	public class EventFormModel
	{
		[Required]
		public string nameEvent { get; set; }
		[Required]
		public string dateEvent { get; set; }
		[Required]
		public string pleaceEvent { get; set; }
		[Required]
		public string descEvent { get; set; }
		[Required]
		public string kindEvent { get; set; }
		[Required]
		public string organizer { get; set; }

	}
}

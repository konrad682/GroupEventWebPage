﻿using System;
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
		public string placeEvent { get; set; }
		[Required]
		public string timeEvent { get; set; }
		[Required]
		public int numberPlacesEvent { get; set; }
		[Required]
		public string descEvent { get; set; }
		[Required]
		public string kindEvent { get; set; }
		[Required]
		public string organizer { get; set; }

	}
}

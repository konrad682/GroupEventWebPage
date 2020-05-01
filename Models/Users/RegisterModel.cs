﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GruopEventPage.Models
{
	public class RegisterModel
	{
		[Required]
		public string FirstName { get; set; }
		[Required]
		public string LastName { get; set; }
		[Required]
		public string Username { get; set; }
		[Required]
		public string Password { get; set; }
	}
}

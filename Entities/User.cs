﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GruopEventPage.Entities
{
	public class User
	{
		[Key]
		public int UserID { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Username { get; set; }
		public byte[] PasswordHash { get; set; }
		public byte[] PasswordSalt { get; set; }
		public string Role { get; set; }

	}
}

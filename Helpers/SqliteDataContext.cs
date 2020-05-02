﻿using GruopEventPage.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace GruopEventPage.Helpers
{
	public class DataContext : DbContext
	{
		protected readonly IConfiguration Configuration;

		public DataContext(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		protected override void OnConfiguring(DbContextOptionsBuilder options)
		{
			// connect to sqlite database
			options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
		}

		public DbSet<User> Users { get; set; }
		public DbSet<EventForm> EventFormFootball { get; set; }
	}
}

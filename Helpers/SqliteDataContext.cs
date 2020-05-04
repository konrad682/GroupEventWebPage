using GruopEventPage.Entities;
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

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<UserFootballEvent>().HasKey(sc => new { sc.UserID, sc.EventID });

			modelBuilder.Entity<UserFootballEvent>()
				.HasOne(bc => bc.EventForm)
				.WithMany(b => b.UserFootballEvent)
				.HasForeignKey(bc => bc.EventID);

			modelBuilder.Entity<UserFootballEvent>()
				.HasOne(bc => bc.User)
				.WithMany(c => c.UserFootballEvent)
				.HasForeignKey(bc => bc.UserID);
		}

		public DbSet<User> Users { get; set; }
		public DbSet<EventForm> EventFormFootball { get; set; }
		public DbSet<UserFootballEvent> UserFootballEvent { get; set; }
	}
}

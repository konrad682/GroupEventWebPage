using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace GruopEventPage.Helpers
{
	public class SqliteDataContext : DataContext
	{
		public SqliteDataContext(IConfiguration configuration) : base(configuration) { }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
		}
	}
}

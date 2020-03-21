using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GruopEventPage.Migrations.SqliteMigrations
{
	public partial class InitialCreate : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateTable(
				name: "Users",
				columns: table => new
				{
					UserID = table.Column<int>(nullable: false)
						.Annotation("Sqlite:Autoincrement", true),
					FirstName = table.Column<string>(nullable: true),
					LastName = table.Column<string>(nullable: true),
					Username = table.Column<string>(nullable: true),
					PasswordHash = table.Column<byte[]>(nullable: true),
					PasswordSalt = table.Column<byte[]>(nullable: true),
					Role = table.Column<string>(nullable: true)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Users", x => x.UserID);
				});
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				name: "Users");
		}
	}
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GruopEventPage.Migrations.SqliteMigrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventFormFootball",
                columns: table => new
                {
                    EventID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NameEvent = table.Column<string>(nullable: true),
                    DateEvent = table.Column<string>(nullable: true),
                    PlaceEvent = table.Column<string>(nullable: true),
                    DescEvent = table.Column<string>(nullable: true),
                    Organizer = table.Column<string>(nullable: true),
                    KindEvent = table.Column<string>(nullable: true),
                    TimeEvent = table.Column<string>(nullable: true),
                    NumberPlacesEvent = table.Column<int>(nullable: false),
                    NumbersOfCurrentParticipants = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventFormFootball", x => x.EventID);
                });

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

            migrationBuilder.CreateTable(
                name: "UserFootballEvent",
                columns: table => new
                {
                    UserID = table.Column<int>(nullable: false),
                    EventID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFootballEvent", x => new { x.UserID, x.EventID });
                    table.ForeignKey(
                        name: "FK_UserFootballEvent_EventFormFootball_EventID",
                        column: x => x.EventID,
                        principalTable: "EventFormFootball",
                        principalColumn: "EventID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserFootballEvent_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserFootballEvent_EventID",
                table: "UserFootballEvent",
                column: "EventID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserFootballEvent");

            migrationBuilder.DropTable(
                name: "EventFormFootball");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

﻿// <auto-generated />
using System;
using GruopEventPage.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GruopEventPage.Migrations.SqliteMigrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2");

            modelBuilder.Entity("GruopEventPage.Entities.EventForm", b =>
                {
                    b.Property<int>("EventID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("DateEvent")
                        .HasColumnType("TEXT");

                    b.Property<string>("DescEvent")
                        .HasColumnType("TEXT");

                    b.Property<string>("KindEvent")
                        .HasColumnType("TEXT");

                    b.Property<string>("NameEvent")
                        .HasColumnType("TEXT");

                    b.Property<int>("NumberPlacesEvent")
                        .HasColumnType("INTEGER");

                    b.Property<int>("NumbersOfCurrentParticipants")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Organizer")
                        .HasColumnType("TEXT");

                    b.Property<string>("PlaceEvent")
                        .HasColumnType("TEXT");

                    b.Property<string>("TimeEvent")
                        .HasColumnType("TEXT");

                    b.HasKey("EventID");

                    b.ToTable("EventFormFootball");
                });

            modelBuilder.Entity("GruopEventPage.Entities.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("Role")
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.HasKey("UserID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("GruopEventPage.Entities.UserFootballEvent", b =>
                {
                    b.Property<int>("UserID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("EventID")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserID", "EventID");

                    b.HasIndex("EventID");

                    b.ToTable("UserFootballEvent");
                });

            modelBuilder.Entity("GruopEventPage.Entities.UserFootballEvent", b =>
                {
                    b.HasOne("GruopEventPage.Entities.EventForm", "EventForm")
                        .WithMany("UserFootballEvent")
                        .HasForeignKey("EventID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GruopEventPage.Entities.User", "User")
                        .WithMany("UserFootballEvent")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

using AutoMapper;
using GruopEventPage.Entities;
using GruopEventPage.Models;
using GruopEventPage.Models.EventForms;

namespace GruopEventPage.Helpers
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
			CreateMap<User, UserModel>();
			CreateMap<RegisterModel, User>();
			CreateMap<EventFormModel, EventForm>();
			CreateMap<EventForm, EventFormModelFull>();
			CreateMap<UpdateModel, User>();
		}
	}
}

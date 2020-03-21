using AutoMapper;
using GruopEventPage.Entities;
using GruopEventPage.Models;

namespace GruopEventPage.Helpers
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
			CreateMap<User, UserModel>();
			CreateMap<RegisterModel, User>();
			CreateMap<UpdateModel, User>();
		}
	}
}

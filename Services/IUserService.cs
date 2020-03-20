using System;
using System.Collections.Generic;
using System.Linq;
using GruopEventPage.Entities;
using System.Threading.Tasks;

namespace GruopEventPage.Services
{
	public interface IUserService
	{
		Task<User> Authenticate(string username, string password);
		Task<IEnumerable<User>> GetAll();
		User GetById(int id);
	}
}

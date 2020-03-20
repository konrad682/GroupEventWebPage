using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using GruopEventPage.Entities;
using GruopEventPage.Helpers;
using System.Threading.Tasks;

namespace GruopEventPage.Services
{
	public class UserService : IUserService
	{
		private readonly AppSettings _appSettings;

		private List<User> _users = new List<User>
		{
			new User { UserID = 0, FirstName = "Admin", LastName = "User", Username = "admin", Password = "admin", Role = Role.Admin },
			new User { UserID = 1, FirstName = "test", LastName = "User", Username = "test", Password = "test", Role = Role.User },
			new User { UserID = 2, FirstName = "Adam", LastName = "Lipek", Username = "lipa", Password = "123", Role = Role.User },
			new User { UserID = 3, FirstName = "Konrad", LastName = "Wędzicha", Username = "wedo", Password = "123", Role = Role.Admin },
		};

		public UserService(IOptions<AppSettings> appSettings)
		{
			_appSettings = appSettings.Value;
		}

		public async Task<User> Authenticate(string username, string password)
		{
			User user = await Task.Run(() => _users.SingleOrDefault(x => x.Username == username && x.Password == password));

			if(user == null)
			{
				return null;
			}

			// authentication successful
			var tokenHandler = new JwtSecurityTokenHandler();
			var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(new Claim[]
				{
					new Claim(ClaimTypes.Name, user.UserID.ToString()),
					new Claim(ClaimTypes.Role, user.Role)
				}),
				Expires = DateTime.UtcNow.AddDays(7),
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
			};

			var token = tokenHandler.CreateToken(tokenDescriptor);
			user.Token = tokenHandler.WriteToken(token);

			return user.WithoutPassword();
		}

		public async Task<IEnumerable<User>> GetAll()
		{
			return await Task.Run(() => _users.WithoutPasswords());
		}

		public User GetById(int userID)
		{
			var user = _users.FirstOrDefault(x => x.UserID == userID);
			return user.WithoutPassword();
		}
	}
}

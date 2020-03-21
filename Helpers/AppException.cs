using System;
using System.Globalization;

namespace GruopEventPage.Helpers
{
	public class AppException : Exception
	{
		public AppException() : base() { }

		public AppException(string message) : base(message) { }

		public AppException(String message, params object[] args)
			: base(String.Format(CultureInfo.CurrentCulture, message, args)) { }
	}
}

using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor_JavaScriptInteroperability.Services
{
	public class CallJavaScript
	{
		private  readonly IJSRuntime js;
		public int res = 0;
		public string data;
		public CallJavaScript(IJSRuntime js)
		{
			this.js = js;
		}

		public  async void Print()
		{
			await js.InvokeVoidAsync("display");
		}

		public async Task Add()
		{
			res = await js.InvokeAsync<int>("doWork", 10, 20);
		}

		public async Task GetData()
		{
			data = await js.InvokeAsync<string>("getData");
		}
	}
}

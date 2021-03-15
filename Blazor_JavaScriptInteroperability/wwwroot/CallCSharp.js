window.accessCSharpFunction = {
	display: function () {
		DotNet.invokeMethodAsync("Blazor_JavaScriptInteroperability", "Dipslay")
			.then((message) => {
				alert(`Data Received ${message}`);
			});	
	},

	printMessage: function () {
		DotNet.invokeMethodAsync("Blazor_JavaScriptInteroperability", "showMessage")
			.then((message) => {
				alert(`Data Received ${message}`);
			});
	},
	addValues: function () {
		DotNet.invokeMethodAsync("Blazor_JavaScriptInteroperability", "add", 10,20)
			.then((result) => {
				alert(`Data Received ${result}`);
			});
	},
	getData: function () {
		DotNet.invokeMethodAsync("Blazor_JavaScriptInteroperability", "getProducts")
			.then((result) => {
				alert(`Data Received ${JSON.stringify(result)}`);
			});
	}
};
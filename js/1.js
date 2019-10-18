	function myFunction()
	{
		let arr = [
			{username:"123",password:"456"},
			{username:"456",password:"123"}
		];

		let username = document.getElementById("username");
		let password = document.getElementById("password");


		if(username.value != "" && password.value != "")
		{
			for (let i = arr.length - 1; i >= 0; i--) {
				if(arr[i].username == username.value && arr[i].password == password.value)
				{
					console.log("Login success");
					return;
				}
			}
			console.log("Login fail");
		}
		else{
			console.log("Empty value");
		}
	}
	
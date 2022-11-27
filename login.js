//getting handlers to the html objects (by id)
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
//simple setting authentication valid data as consts
const validUsername = 'admin';
const validPassword = 'admin';

//assigning event action with submit button
loginButton.addEventListener("click", (e) => {
	//stopping the page reload (with sending data to the "server")
    e.preventDefault();
	//getting username and password
    const username = loginForm.username.value;
    const password = loginForm.password.value;

	//simple validating the authentication data
    if (username === validUsername && password === validPassword) {
		//showing info about successfull authentication
        alert("You have successfully logged in.");
        location.reload();
    } else {
		//showing info about invalid authentication data
        loginErrorMsg.style.opacity = 1;
    }
});

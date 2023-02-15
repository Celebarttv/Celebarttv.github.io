function validatePSW() {
	var psw = document.getElementById("pass").value;
	var btn = document.getElementById("btn").value;
	var ffs = 'GR550219BA4G2';

	if (psw == ffs) {
		window.open("models/vanessa.html", "_self");
	}
	else {
		window.open("error.html", "_self");
	}
}
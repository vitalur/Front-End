menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

window.onscroll = function myFunction() {
	var button = document.getElementById("myButton");
	var sticky = button.offsetTop;

	if (window.pageYOffset >= sticky) {
		button.classList.add(" sticky");
	} else {
		button.classList.remove("sticky");
	}
}
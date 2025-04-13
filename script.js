menu_burger.onclick = function myBurger() {
	var x = document.getElementById('nav_link_burger');
	if (x.className === "nav_link") {
		 x.className += " responsive";
	} else{
		 x.className = "nav_link";
	};
};
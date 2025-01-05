//  menupage.js

window.addEventListener("resize", function() {
	var match = window.matchMedia("(min-width: 768px)");
	if (match.matches) {
		appmenu.style.display = "none";
		pizzamenu.style.display = "none";
		rollsmenu.style.display = "none";
		saladsmenu.style.display = "none";
		subsmenu.style.display = "none";
		entreesmenu.style.display = "none";
		dessertsmenu.style.display = "none";
		specialsmenu.style.display = "none";
	}
}

function show_appetizers() {
	var menunav = document.getElementById("mobilemenunavigation");
	var appmenu = document.getElementById("appetizersmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		appmenu.style.display = "block";
	}
}

function hide_appetizers() {
	var menunav = document.getElementById("mobilemenunavigation");
	var appmenu = document.getElementById("appetizersmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (appmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		appmenu.style.display = "none";
	}
}

function show_pizza() {
	var menunav = document.getElementById("mobilemenunavigation");
	var pizzamenu = document.getElementById("pizzamobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		pizzamenu.style.display = "block";
	}
}

function hide_pizza() {
	var menunav = document.getElementById("mobilemenunavigation");
	var pizzamenu = document.getElementById("pizzamobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (pizzamenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		pizzamenu.style.display = "none";
	}
}

function show_rolls() {
	var menunav = document.getElementById("mobilemenunavigation");
	var rollsmenu = document.getElementById("rollsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		rollsmenu.style.display = "block";
	}
}

function hide_rolls() {
	var menunav = document.getElementById("mobilemenunavigation");
	var rollsmenu = document.getElementById("rollsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (rollsmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		rollsmenu.style.display = "none";
	}
}

function show_salads() {
	var menunav = document.getElementById("mobilemenunavigation");
	var saladsmenu = document.getElementById("saladsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		saladsmenu.style.display = "block";
	}
}

function hide_salads() {
	var menunav = document.getElementById("mobilemenunavigation");
	var saladsmenu = document.getElementById("saladsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (saladsmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		saladsmenu.style.display = "none";
	}
}

function show_subs() {
	var menunav = document.getElementById("mobilemenunavigation");
	var subsmenu = document.getElementById("subsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		subsmenu.style.display = "block";
	}
}

function hide_subs() {
	var menunav = document.getElementById("mobilemenunavigation");
	var subsmenu = document.getElementById("subsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (subsmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		subsmenu.style.display = "none";
	}
}

function show_entrees() {
	var menunav = document.getElementById("mobilemenunavigation");
	var entreesmenu = document.getElementById("pastamobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		entreesmenu.style.display = "block";
	}
}

function hide_entrees() {
	var menunav = document.getElementById("mobilemenunavigation");
	var entreesmenu = document.getElementById("pastamobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (entreesmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		entreesmenu.style.display = "none";
	}
}

function show_desserts() {
	var menunav = document.getElementById("mobilemenunavigation");
	var dessertsmenu = document.getElementById("dessertsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		dessertsmenu.style.display = "block";
	}
}

function hide_desserts() {
	var menunav = document.getElementById("mobilemenunavigation");
	var dessertsmenu = document.getElementById("dessertsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (dessertsmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		dessertsmenu.style.display = "none";
	}
}

function show_specials() {
	var menunav = document.getElementById("mobilemenunavigation");
	var specialsmenu = document.getElementById("specialsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (menunav.style.display != "none" && match.matches) {
		menunav.style.display = "none";
		specialsmenu.style.display = "block";
	}
}

function hide_specials() {
	var menunav = document.getElementById("mobilemenunavigation");
	var specialsmenu = document.getElementById("specialsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	if (specialsmenu.style.display == "block" && match.matches) {
		menunav.style.display = "block";
		specialsmenu.style.display = "none";
	}
}
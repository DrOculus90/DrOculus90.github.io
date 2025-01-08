//  menupage2.js

$(document).ready(function(){
	var menunav = document.getElementById("mobilemenunavigation");
	var appmenu = document.getElementById("appetizersmobile");
	var pizzamenu = document.getElementById("pizzamobile");
	var rollsmenu = document.getElementById("rollsmobile");
	var saladsmenu = document.getElementById("saladsmobile");
	var subsmenu = document.getElementById("subsmobile");
	var entreesmenu = document.getElementById("pastamobile");
	var dessertsmenu = document.getElementById("dessertsmobile");
	var specialsmenu = document.getElementById("specialsmobile");
	var match = window.matchMedia("(max-width: 767px)");
	var match_big = window.matchMedia("(min-width: 768px)");
	
	function show_appetizers() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    appmenu.style.display = "block";
	    }
	}
	
	function hide_appetizers() {
		if (appmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    appmenu.style.display = "none";
	    }
	}
	
	function show_pizza() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    pizzamenu.style.display = "block";
	    }
	}
	
	function hide_pizza() {
		if (pizzamenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    pizzamenu.style.display = "none";
	    }
	}
	
	function show_rolls()  {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    rollsmenu.style.display = "block";
	    }
	}
	
	function hide_rolls() {
		if (rollsmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    rollsmenu.style.display = "none";
	    }
	}
	
	function show_salads() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    saladsmenu.style.display = "block";
	    }
	}
	
	function hide_salads() {
		if (saladsmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    saladsmenu.style.display = "none";
	    }
	}
	
	function show_subs() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    subsmenu.style.display = "block";
	    }
	}
	
	function hide_subs() {
		if (subsmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    subsmenu.style.display = "none";
	    }
	}
	
	function show_entrees() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    entreesmenu.style.display = "block";
	    }
	}
	
	function hide_entrees() {
		if (entreesmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    entreesmenu.style.display = "none";
	    }
	}
	
	function show_desserts() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    dessertsmenu.style.display = "block";
	    }
	}
	
	function hide_desserts() {
		if (dessertsmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    dessertsmenu.style.display = "none";
	    }
	}
	
	function show_specials() {
		if (menunav.style.display != "none" && match.matches) {
		    menunav.style.display = "none";
		    specialsmenu.style.display = "block";
	    }
	}
	
	function hide_specials() {
		if (specialsmenu.style.display == "block" && match.matches) {
		    menunav.style.display = "block";
		    specialsmenu.style.display = "none";
	    }
	}
	
	/*
	$(window).resize(function() {
		if (match_big.matches) {
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
	*/
}
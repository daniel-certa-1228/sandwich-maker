"use strict";
// console.log( "disable.js" );

let DOMhandler = require('./DOM-handler.js');

function unCheck(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].checked = false;
		// array[i].disabled = false
	}
}

function diableCheck(array) {
	for (let i = 0; i < array.length; i++) {
		unCheck(array);
		array[i].disabled = true;
	}
}

function enableCheck(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].disabled = false;	
	}
}




let sandwichOutput = document.getElementById("sandwichOutput");
let resetBtn = document.getElementById("resetBtn");
// console.log( "resetBtn", resetBtn );
resetBtn.addEventListener("click", (event) => {
	// console.log( "target", event.target );
	unCheck(breadChecks);
	unCheck(meatChecks);
	unCheck(cheeseChecks);
	unCheck(veggiesChecks);
	unCheck(condimentsChecks);

	let target = event.target;
	let allDivs = document.getElementsByClassName("ingredients");
	for (let i = 0; i < allDivs.length; i++) {
		allDivs[i].classList.remove('greyed-out');
	}

	meatRadio.checked = true;
	breadRadio.checked = true;
	cheeseRadio.checked = true;
	veggiesRadio.checked = true;
	condimentsRadio.checked = true;

	DOMhandler.hideSandwich(sandwichOutput);

});



let breadRadio = document.getElementById("BreadRadio");
let nobreadRadio = document.getElementById("noBreadRadio");
let breadChecks = document.getElementsByClassName("bread-check");

breadRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	enableCheck(breadChecks);
	parent.classList.remove("greyed-out");
});	

nobreadRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	diableCheck(breadChecks);
	parent.classList.add("greyed-out");
});	

let meatRadio = document.getElementById("MeatRadio");
let nomeatRadio = document.getElementById("noMeatRadio");
let meatChecks = document.getElementsByClassName("meat-check");

meatRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	enableCheck(meatChecks);
	parent.classList.remove("greyed-out");
});	

nomeatRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	diableCheck(meatChecks);
	parent.classList.add("greyed-out");
});

let cheeseRadio = document.getElementById("CheeseRadio");
let nocheeseRadio = document.getElementById("noCheeseRadio");
let cheeseChecks = document.getElementsByClassName("cheese-check");

cheeseRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	enableCheck(cheeseChecks);
	parent.classList.remove("greyed-out");
});	

nocheeseRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	diableCheck(cheeseChecks);
	parent.classList.add("greyed-out");
});


let veggiesRadio = document.getElementById("VeggiesRadio");
let noveggiesRadio = document.getElementById("noVeggiesRadio");
let veggiesChecks = document.getElementsByClassName("veggies-check");

veggiesRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	enableCheck(veggiesChecks);
	parent.classList.remove("greyed-out");
});	

noveggiesRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	diableCheck(veggiesChecks);
	parent.classList.add("greyed-out");
});

let condimentsRadio = document.getElementById("CondimentsRadio");
let nocondimentsRadio = document.getElementById("noCondimentsRadio");
let condimentsChecks = document.getElementsByClassName("condiments-check");

condimentsRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	enableCheck(condimentsChecks);
	parent.classList.remove("greyed-out");
});	

nocondimentsRadio.addEventListener("click", (event) => {
	let parent = event.target.parentNode;
	diableCheck(condimentsChecks);
	parent.classList.add("greyed-out");
});
	 

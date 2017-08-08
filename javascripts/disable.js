console.log( "disable.js" );

{	
	SandwichMaker.diableCheck = (array) => {
		for (let i = 0; i < array.length; i++) {
			array[i].checked = false;
			array[i].disabled = true;
		};
	};

	SandwichMaker.enableCheck = (array) => {
		for (let i = 0; i < array.length; i++) {
			array[i].disabled = false		
		};
	};

	let breadRadio = document.getElementById("BreadRadio");
	let nobreadRadio = document.getElementById("noBreadRadio");
	let breadChecks = document.getElementsByClassName("bread-check");
	
	breadRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.enableCheck(breadChecks)
		parent.classList.remove("greyed-out")
	});	
	
	nobreadRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.diableCheck(breadChecks)
		parent.classList.add("greyed-out")
	});	

	let meatRadio = document.getElementById("MeatRadio");
	let nomeatRadio = document.getElementById("noMeatRadio");
	let meatChecks = document.getElementsByClassName("meat-check");

	meatRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.enableCheck(meatChecks)
		parent.classList.remove("greyed-out")
	});	
	
	nomeatRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.diableCheck(meatChecks)
		parent.classList.add("greyed-out")
	});

	let cheeseRadio = document.getElementById("CheeseRadio");
	let nocheeseRadio = document.getElementById("noCheeseRadio");
	let cheeseChecks = document.getElementsByClassName("cheese-check");

	cheeseRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.enableCheck(cheeseChecks)
		parent.classList.remove("greyed-out")
	});	
	
	nocheeseRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.diableCheck(cheeseChecks)
		parent.classList.add("greyed-out")
	});


	let veggiesRadio = document.getElementById("VeggiesRadio");
	let noveggiesRadio = document.getElementById("noVeggiesRadio");
	let veggiesChecks = document.getElementsByClassName("veggies-check");

	veggiesRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.enableCheck(veggiesChecks)
		parent.classList.remove("greyed-out")
	});	
	
	noveggiesRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.diableCheck(veggiesChecks)
		parent.classList.add("greyed-out")
	});

	let condimentsRadio = document.getElementById("CondimentsRadio");
	let nocondimentsRadio = document.getElementById("noCondimentsRadio");
	let condimentsChecks = document.getElementsByClassName("condiments-check");

	condimentsRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.enableCheck(veggiesChecks)
		parent.classList.remove("greyed-out")
	});	
	
	nocondimentsRadio.addEventListener("click", (event) => {
		let parent = event.target.parentNode
		SandwichMaker.diableCheck(veggiesChecks)
		parent.classList.add("greyed-out")
	});
	 
}
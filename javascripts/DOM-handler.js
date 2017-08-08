console.log( "DOM-handler.js" );

{
	let sandwichDiv = document.getElementById("sandwichOutput");
	let sandwichBtn = document.getElementById("sandwichBtn")
	// console.log( "sandwichOutput", sandwichOutput );

	SandwichMaker.showSandwich = (element) => {

		element.classList.remove("hidden")

	}

	SandwichMaker.hideSandwich = (element) => {

		element.classList.add('hidden')
	}

	sandwichBtn.addEventListener("click", (event) => {
		SandwichMaker.getValues();
		SandwichMaker.showSandwich(sandwichDiv)
		sandwichDiv.scrollIntoView()
	});

}



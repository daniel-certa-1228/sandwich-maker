{
	var SandwichMaker = {};
}

{
	let sandwichDiv = document.getElementById("sandwichOutput");
	let sandwichBtn = document.getElementById("sandwichBtn")
	// console.log( "sandwichOutput", sandwichOutput );

	SandwichMaker.showSandwich = (element) => {

		element.classList.remove("hidden")

	}

	sandwichBtn.addEventListener("click", (event) => {
		SandwichMaker.showSandwich(sandwichDiv)
		sandwichDiv.scrollIntoView()
	});

}
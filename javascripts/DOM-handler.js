console.log( "DOM-handler.js" );

{
	let sandwichDiv = document.getElementById("sandwichOutput");
	let sandwichBtn = document.getElementById("sandwichBtn")
	// console.log( "sandwichOutput", sandwichOutput );
	// let totalCard = `		<h1>TEST</h1>
	// 						// <p>bread</p>
	// 						// <p>meat</p>
	// 						// <p>cheese</p>
	// 						// <p>veggies</p>
	// 						// <p>condiments</p>
	// 						<h2>Total Cost:</h2>`

	SandwichMaker.showSandwich = (element) => {

		element.classList.remove("hidden")

	}

	SandwichMaker.hideSandwich = (element) => {

		element.classList.add('hidden')
	}



	sandwichBtn.addEventListener("click", (event) => {
		let total = SandwichMaker.calculate();
		sandwichDiv.innerHTML = `	<h1>TEST</h1>
									<p>bread</p>
									<p>meat</p>
									<p>cheese</p>
									<p>veggies</p>
									<p>condiments</p>
									<h2>Total Cost: $${total.toFixed(2)} </h2>`
		SandwichMaker.showSandwich(sandwichDiv)
		sandwichDiv.scrollIntoView()
	});

}



console.log( "DOM-handler.js" );

{
	let sandwichDiv = document.getElementById("sandwichOutput");
	let sandwichBtn = document.getElementById("sandwichBtn")

	SandwichMaker.showSandwich = (element) => {

		element.classList.remove("hidden")

	}

	SandwichMaker.hideSandwich = (element) => {

		element.classList.add('hidden')
	}

	sandwichBtn.addEventListener("click", (event) => {
		let total = SandwichMaker.calculate();
		let bread = SandwichMaker.sendBreads();
		let meat = SandwichMaker.sendMeats();
		let cheese = SandwichMaker.sendCheese();
		let veggies = SandwichMaker.sendVeggies();
		let condiments = SandwichMaker.sendCondiments();
		console.log( "bread", bread );

		sandwichDiv.innerHTML = `	<h1>Final Sandwich:</h1>
									<p>Bread - ${bread}</p>
									<p>Meat - ${meat}</p>
									<p>Cheese - ${cheese}</p>
									<p>Veggies - ${veggies}</p>
									<p>Condiments - ${condiments}</p>
									<h2>Total Cost: $${total.toFixed(2)} </h2>`
		SandwichMaker.showSandwich(sandwichDiv)
		sandwichDiv.scrollIntoView()
	});

}



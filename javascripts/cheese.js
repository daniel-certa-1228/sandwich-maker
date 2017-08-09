console.log( "cheese.js" );

{

	let cheesePrices = {
						"American_Cheese": 1.00,
						"Swiss_Cheese": 0.75,
						"Provalone_Cheese": 1.10,
						"No_Cheese": 0
					 }

	let cheeseNumbers = []				 			

	SandwichMaker.getCheeseTotal = (array) => {
		let cheeseName = [];

		SandwichMaker.sendCheese = () => {
			return cheeseName
		}

		cheeseNumbers = [];

		for (let i = 0; i < array.length; i++) {

			let cheeseCost = cheesePrices[array[i]];
			let cheeses = array[i].replace("_", " ")
			cheeseNumbers.push(cheeseCost)
			cheeseName.push(cheeses)

		};

			if (cheeseNumbers.length > 0) {

				let cheeseTotal = cheeseNumbers.reduce( (prev, curr) => {
				return prev + curr

			})

			array.length = 0	
			return cheeseTotal

		}  else {

			return 0

		}
	}
}
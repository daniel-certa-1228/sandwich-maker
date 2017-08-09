console.log( "veggies.js" );

{
	let veggiePrices = {
						"Lettuce": 0.50,
						"Mushrooms": 0.75,
						"Peppers": 0.90,
						"No_Veggies": 0
					 }

	let veggieNumbers = []				 			

	SandwichMaker.getVeggieTotal = (array) => {
		let veggieName = []

		SandwichMaker.sendVeggies = () => {
			return veggieName
		}

		veggieNumbers = [];

		for (let i = 0; i < array.length; i++) {

			let veggieCost = veggiePrices[array[i]];
			let veggies = array[i].replace("_", " ")
			veggieNumbers.push(veggieCost)
			veggieName.push(veggies)
		};

			if (veggieNumbers.length > 0) {

				let veggieTotal = veggieNumbers.reduce( (prev, curr) => {
				return prev + curr

			})
			array.length = 0	
			return veggieTotal

		}  else  {
			
			return 0	
		}
	}
}
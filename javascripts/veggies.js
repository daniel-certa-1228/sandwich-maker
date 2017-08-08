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

		veggieNumbers = [];

		for (let i = 0; i < array.length; i++) {

			let veggieCost = veggiePrices[array[i]];
			// console.log( breadCost  );

			veggieNumbers.push(veggieCost)

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
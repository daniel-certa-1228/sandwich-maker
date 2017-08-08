console.log( "condiments.js" );

{

	let condimentPrices = {
						"Ketchup": 0.25,
						"Mustard": 0.50,
						"Mayo": 0.65,
						"No_Condiments": 0
					 }

	let condimentNumbers = []				 			

	SandwichMaker.getCondimentTotal = (array) => {
		
		condimentNumbers = [];

		for (let i = 0; i < array.length; i++) {

			let condimentCost = condimentPrices[array[i]];
			// console.log( breadCost  );

			condimentNumbers.push(condimentCost)

		};

			if (condimentNumbers.length > 0) {

				let condimentTotal = condimentNumbers.reduce( (prev, curr) => {
				return prev + curr

			})
			array.length = 0
			return condimentTotal

		}  else  {

			return 0
		}

	}



}
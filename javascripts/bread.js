console.log( "bread.js" );

{
	let breadPrices = {
							"White": 1.00,
							"Wheat": 1.25,
							"Rye": 1.50,
							"No_Bread": 0,
			 			}

	let breadNumbers = []			 			

	SandwichMaker.getBreadTotal = (array) => {
		let breadName = [];

		SandwichMaker.sendBreads = () => {
			return breadName
		}

		breadNumbers = [];

		for (let i = 0; i < array.length; i++) {

			let breadCost = breadPrices[array[i]];
			let breads = array[i].replace("_", " ");
			breadNumbers.push(breadCost);
			breadName.push(breads);
		};

			if (breadNumbers.length > 0) {

				let breadTotal = breadNumbers.reduce( (prev, curr) => {
				return prev + curr

			})
			array.length = 0	
			return breadTotal

		}  else  {
			
			return 0
		}
	}
}
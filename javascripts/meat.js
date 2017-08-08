console.log( "meat.js" );

{

	let meatPrices = {
						"Beef": 3.00,
						"Chicken": 2.50,
						"Turkey": 1.75,
						"No_Meat": 0
					 }

	let meatNumbers = []				 			

	SandwichMaker.getMeatTotal = (array) => {
		
		meatNumbers = [];

		for (let i = 0; i < array.length; i++) {

			let meatCost = meatPrices[array[i]];
			// console.log( breadCost  );

			meatNumbers.push(meatCost)

		};

			if (meatNumbers.length > 0) {

				let meatTotal = meatNumbers.reduce( (prev, curr) => {
				return prev + curr

			})
			array.length = 0
			return meatTotal

		}  else  {

			return 0
		}

	}
}
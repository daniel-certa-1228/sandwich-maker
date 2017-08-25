"use strict";
console.log( "bread.js" );

var breadSpace = {};

let breadPrices = {
						"White": 1.00,
						"Wheat": 1.25,
						"Rye": 1.50,
						"No_Bread": 0,
		 			};

let breadNumbers = [];		 			

function getBreadTotal(array) {
	let breadName = [];

	breadSpace.sendBreads = () =>{
		return breadName;
	};

	breadNumbers = [];

	for (let i = 0; i < array.length; i++) {
		let breadCost = breadPrices[array[i]];
		let breads = array[i].replace("_", " ");
		breadNumbers.push(breadCost);
		breadName.push(breads);
	}

		if (breadNumbers.length > 0) {
			let breadTotal = breadNumbers.reduce( (prev, curr) => {
			return prev + curr;
		});
		array.length = 0;	
		return breadTotal;

	}  else  {	
		return 0;
	}
}
module.exports = {breadSpace, getBreadTotal};

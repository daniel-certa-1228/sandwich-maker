"use strict";
console.log( "condiments.js" );

var condSpace = {};

let condimentPrices = {
					"Ketchup": 0.25,
					"Mustard": 0.50,
					"Mayo": 0.65,
					"No_Condiments": 0
				 };

let condimentNumbers = [];

function getCondimentTotal(array) {
	let condimentsName = [];

	condSpace.sendCondiments = () =>{
		return condimentsName;
	};
	
	condimentNumbers = [];

	for (let i = 0; i < array.length; i++) {
		let condimentCost = condimentPrices[array[i]];
		let condiments = array[i].replace("_", " ");
		condimentNumbers.push(condimentCost);
		condimentsName.push(condiments);
	}
		if (condimentNumbers.length > 0) {
			let condimentTotal = condimentNumbers.reduce( (prev, curr) => {
			return prev + curr;
		});
		array.length = 0;
		return condimentTotal;

	}  else  {
		return 0;
	}
}
module.exports = {condSpace, getCondimentTotal};
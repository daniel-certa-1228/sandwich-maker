"use strict";
console.log( "veggies.js" );

var veggieSpace = {};

let veggiePrices = {
					"Lettuce": 0.50,
					"Mushrooms": 0.75,
					"Peppers": 0.90,
					"No_Veggies": 0
				 };

let veggieNumbers = [];		

function getVeggieTotal(array) {
	let veggieName = [];

	veggieSpace.sendVeggies = () =>{
		return veggieName;
	};

	veggieNumbers = [];

	for (let i = 0; i < array.length; i++) {
		let veggieCost = veggiePrices[array[i]];
		let veggies = array[i].replace("_", " ");
		veggieNumbers.push(veggieCost);
		veggieName.push(veggies);
	}
		if (veggieNumbers.length > 0) {
			let veggieTotal = veggieNumbers.reduce( (prev, curr) => {
			return prev + curr;
		});
		array.length = 0;	
		return veggieTotal;
	}  else  {
		return 0;
	}
}
module.exports = {veggieSpace, getVeggieTotal};
"use strict";
// console.log( "sandwichMaker.js" );
let breadModule = require('./bread.js'),
	meatModule = require('./meat.js'),
	cheeseModule = require('./cheese.js'),
	condModule = require('./condiments.js'),
	veggieModule = require('./veggies.js'),
	DOMhandler = require('./DOM-handler.js');


let breadChoices = [];
let meatChoices = [];
let cheeseChoices = [];
let veggieChoices = [];
let condimentChoices = [];


function getValues(array1, array2) {

	for (let i = 0; i < array1.length; i++) {

		if (array1[i].checked && (array1[i].value !== "null")) {

				array2.push(array1[i].value);
		}
	}
}

function calculate() {
// console.log( "breadValues", breadValues );
let breadValues = $(".br");
let meatValues = $(".mt");
let cheeseValues = $(".chz");
let veggieValues = $(".veg");
let condimentValues = $(".con");
	
getValues(breadValues, breadChoices);
getValues(meatValues, meatChoices);
getValues(cheeseValues, cheeseChoices);
getValues(veggieValues, veggieChoices);
getValues(condimentValues, condimentChoices);
	
let breadCost = breadModule.getBreadTotal(breadChoices);
let meatCost = meatModule.getMeatTotal(meatChoices);
let veggieCost = veggieModule.getVeggieTotal(veggieChoices);
let cheeseCost = cheeseModule.getCheeseTotal(cheeseChoices);
let condimentCost = condModule.getCondimentTotal(condimentChoices);

let subTotal = breadCost + meatCost + veggieCost + cheeseCost + condimentCost;
// console.log( "sub", subTotal );
// console.log( "breadCost", breadCost, "meatCost", meatCost, "veggieCost", veggieCost, "cheeseCost", cheeseCost, "condimentCost", condimentCost );
return subTotal;	
}
module.exports = {calculate};
"use strict";
// console.log( "DOM-handler.js" );
let breadModule = require('./bread.js'),
	meatModule = require('./meat.js'),
	cheeseModule = require('./cheese.js'),
	condModule = require('./condiments.js'),
	veggieModule = require('./veggies.js'),
	SandwichMaker = require('./SandwichMaker.js');

function hideSandwich(element) {
	element.classList.add('hidden');
}

$("#sandwichBtn").click(function() {

	let total = SandwichMaker.calculate();
	let bread = breadModule.breadSpace.sendBreads();
	let meat = meatModule.meatSpace.sendMeats();
	let cheese = cheeseModule.cheeseSpace.sendCheese();
	let veggies = veggieModule.veggieSpace.sendVeggies();
	let condiments = condModule.condSpace.sendCondiments();
	// console.log( "sdiv", sdiv );
	
	$("#sandwichOutput").html(`	<h1>Final Sandwich:</h1>
								<p>Bread - ${bread}</p>
								<p>Meat - ${meat}</p>
								<p>Cheese - ${cheese}</p>
								<p>Veggies - ${veggies}</p>
								<p>Condiments - ${condiments}</p>
								<h2>Total Cost: $${total.toFixed(2)}</h2>`);
	$("#sandwichOutput").removeClass('hidden');
	$('html, body').animate({
    scrollTop: ($('#sandwichOutput').offset().top)
	},300);
});

module.exports = {hideSandwich};

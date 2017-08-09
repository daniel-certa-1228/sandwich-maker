{
	var SandwichMaker = {};
}

{
	let totalPrice = 0;

	SandwichMaker.getTotalPrice = () => {
		return totalPrice;
	}

////////////////////////////////////////////////////////////////

	let breadChoices = [];
	let meatChoices = [];
	let cheeseChoices = [];
	let veggieChoices = [];
	let condimentChoices = [];

	SandwichMaker.calculate = () => {

		let breadValues = document.getElementsByClassName("br");
		let meatValues = document.getElementsByClassName("mt");
		let cheeseValues = document.getElementsByClassName("chz");
		let veggieValues = document.getElementsByClassName("veg");
		let condimentValues = document.getElementsByClassName("con");
		

		SandwichMaker.getValues = (array1, array2) => {

			for (let i = 0; i < array1.length; i++) {

				if (array1[i].checked && (array1[i].value !== "null")) {

						array2.push(array1[i].value)
				}
			};
		}

		SandwichMaker.getValues(breadValues, breadChoices)
		SandwichMaker.getValues(meatValues, meatChoices)
		SandwichMaker.getValues(cheeseValues, cheeseChoices)
		SandwichMaker.getValues(veggieValues, veggieChoices)
		SandwichMaker.getValues(condimentValues, condimentChoices)
	
////////////////////////////////////////////////////////////////////////////////
		let breadCost = SandwichMaker.getBreadTotal(breadChoices);
		let meatCost = SandwichMaker.getMeatTotal(meatChoices);
		let veggieCost = SandwichMaker.getVeggieTotal(veggieChoices);
		let cheeseCost = SandwichMaker.getCheeseTotal(cheeseChoices);
		let condimentCost = SandwichMaker.getCondimentTotal(condimentChoices);

		let subTotal = breadCost + meatCost + veggieCost + cheeseCost + condimentCost
		// console.log( "sub", subTotal );
		// console.log( "breadCost", breadCost, "meatCost", meatCost, "veggieCost", veggieCost, "cheeseCost", cheeseCost, "condimentCost", condimentCost );
		return subTotal
		
	}

}

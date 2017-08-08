{
	var SandwichMaker = {};
}

{

	let totalPrice = 0;

	SandwichMaker.getTotalPrice = () => {
		return totalPrice;
	}

	let breadChoices = [];
	let meatChoices = [];
	let cheeseChoices = [];
	let veggieChoices = [];
	let condimentChoices = [];

	SandwichMaker.unpackChoices = () => {

		let breadValues = document.getElementsByClassName("br");
		let meatValues = document.getElementsByClassName("mt");
		let cheeseValues = document.getElementsByClassName("chz")
		let veggieValues = document.getElementsByClassName("veg")
		let condimentValues = document.getElementsByClassName("con")
		// console.log( "breadvalues", breadvalues );

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

		console.log(  "bread", breadChoices, "meat", meatChoices, "cheese", cheeseChoices, "veggies", veggieChoices, "condiments", condimentChoices );

	}


}


////////////////////////////////////////////////////////////////////////////////
	// let allDivs = document.getElementsByClassName("ingredients")
	// // console.log( "allDivs", allDivs );

	// for (let i = 0; i < allDivs.length; i++) {
	// 	console.log( "allDivs[i]", allDivs[i] );
	// 	for (let i = 0; i < allDivs.length; i++) {
	// 		let choices = $("allDivs[i].input")
	// 		console.log( "choices", choices );
	// 	};
	// };
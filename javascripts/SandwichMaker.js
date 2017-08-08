{
	var SandwichMaker = {};
}

{
	let ingredientChoices =[];

	SandwichMaker.getValues = () => {
		
		ingredientChoices = []

		let choices = $("input:checkbox")

		for (let i = 0; i < choices.length; i++) {

			if (choices[i].checked) {

				ingredientChoices.push(choices[i].value)

			}

		};
			console.log( "ingredientChoices", ingredientChoices );
	}

}
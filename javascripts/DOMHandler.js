console.log("DOMHandler.js");

// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedToppingsArray = [];
// var ingredientList = "";

// Get a reference to the <select> element that has all the meat options

var meatChooser = document.getElementsByName("meat");
var chosenMeat = [];

var breadChooser = document.getElementsByName("bread");
var chosenBread = [];

var cheeseChooser = document.getElementsByName("cheese");
var chosenCheese = [];

var veggieChooser = document.getElementsByName("veggies");
var chosenVeggies = [];

var condimentChooser = document.getElementsByName("condiments");
var chosenCondiments = [];

function orderSandwich(event) {
	

	// clearInputs();
	deactivateOrder();
	getMeats(event);
	getBread(event);
	getCheese(event);
	getVeggies(event);
	getCondiments(event);
	// finalSandwichPrice = SandwichMaker.finalPrice().toFixed(2);
	// console.log("finalSandwichPrice", finalSandwichPrice);
	// ingredientsToString(selectedToppingsArray);
	printSandwich(SandwichMaker.finalPrice().toFixed(2), ingredientsToString(selectedToppingsArray));


	event.preventDefault();
}

function ingredientsToString(input) {
	var ingredientList = "";
	for (var i = 0; i < (input.length - 1); i++) {
		ingredientList += input[i] + ", ";
	}
	ingredientList += "and " + input[input.length-1] + ".";

	console.log("ingredientList", ingredientList);
	return ingredientList;
}

function printSandwich(priceInput, ingredientInput) {

	console.log("printSandwich called");


	// document.getElementById("sandwich-details").innerHTML += `<h2>Test</h2>`;
	// toPrint += `<h2>Test</h2>`;
	document.getElementById("sandwich-details").innerHTML += `<p>The total price of your sandwich is $${priceInput}. Thanks for your order!</p>`

	document.getElementById("sandwich-details").innerHTML += `<p>You ordered a sandwich with the following: ${ingredientInput}</p>`



};

function clearInputs() {
	// finalSandwichPrice = 0;
	selectedToppingsArray = [];
	// ingredientList = "";
	document.getElementById("sandwich-details").innerHTML = "";
	SandwichMaker.clearPrice();
	chosenMeat = [];
	chosenBread = [];
	chosenCheese = [];
	chosenVeggies = [];
	chosenCondiments = [];
	// console.log("inputs:", document.getElementsByTagName("input"));
	var inputsToClear = document.getElementsByTagName("input");
	for (var i = 0; i < inputsToClear.length; i++) {
		// console.log("inputs to clear:", inputsToClear[i]);
		inputsToClear[i].checked = false;
	}
	activateOrder();

};

function deactivateOrder() {
	document.getElementById("order-btn").setAttribute('disabled', true);
}

function activateOrder() {
	document.getElementById("order-btn").removeAttribute('disabled', true);
}

function getMeats(event) {
	var meatChooser = document.getElementsByName("meat");


	meatChooser.forEach(function (element) {
		if (element.checked === true){
			chosenMeat.push(element.id);
			selectedToppingsArray.push(element.value);
		};
	});

	console.log("meatChooser", meatChooser);
	console.log("chosenMeat", chosenMeat);

	SandwichMaker.addMeat(chosenMeat);
	// chosenMeat = [];
	console.log("chosenMeat after clear", chosenMeat);
};

function getBread(event) {
	breadChooser = document.getElementsByName("bread");
	breadChooser.forEach(function (element) {
		if (element.checked === true) {
			chosenBread.push(element.id);
			selectedToppingsArray.push(element.value);
		}
	});
	SandwichMaker.addBread(chosenBread);
	// chosenBread = [];
};

function getCheese(event) {
	cheeseChooser = document.getElementsByName("cheese");
	cheeseChooser.forEach(function (element) {
		if (element.checked === true) {
			chosenCheese.push(element.id);
			selectedToppingsArray.push(element.value);
		}
	});
	SandwichMaker.addCheese(chosenCheese);
	// chosenCheese = [];
};

function getVeggies(event) {
	veggieChooser = document.getElementsByName("veggies");
	veggieChooser.forEach(function (element) {
		if (element.checked === true) {
			chosenVeggies.push(element.id);
			selectedToppingsArray.push(element.value);
		}
	});
	SandwichMaker.addVeggies(chosenVeggies);
	// chosenVeggies = [];
};

function getCondiments(event) {
	condimentChooser = document.getElementsByName("condiments");
	condimentChooser.forEach(function (element) {
		if (element.checked === true) {
			chosenCondiments.push(element.id);
			selectedToppingsArray.push(element.value)
		}
	});
	SandwichMaker.addCondiments(chosenCondiments);
};

// function testSubmit(event) {
// 	console.log("test submit");
// 	meatChooser = document.getElementsByName("meat");
// 	console.log("meatChooser", meatChooser);
// 	event.preventDefault();
// }

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
// */
// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });
// console.log("DOMHandler.js");

// ****** VARIABLE TO HOLD SELECTED SANDWICH INGREDIENTS TO PRINT ****** // 
var selectedToppingsArray = [];


// ****** VARIABLES TO HOLD CHOSEN INGREDIENTS AND GET CHECKBOX DOM ELEMENTS ****** // 
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


// ****** MASTER FUNCTION TO TRIGGER GATHERING OF INGREDIENTS, PRICE CALC, AND PRINTING ****** // 
function orderSandwich(event) {
	deactivateOrder();
	getMeats(event);
	getBread(event);
	getCheese(event);
	getVeggies(event);
	getCondiments(event);
	printSandwich(SandwichMaker.finalPrice().toFixed(2), ingredientsToString(selectedToppingsArray));
	event.preventDefault();
};


// ****** CONSTRUCT A STRING LISTING INGREDIENTS FOR PRINTING ****** // 
function ingredientsToString(input) {
	var ingredientList = "";
	for (var i = 0; i < (input.length - 1); i++) {
		ingredientList += input[i] + ", ";
	}
	ingredientList += "and " + input[input.length-1] + ".";
	return ingredientList;
};


// ****** PRINT SANDWICH PRICE AND SANDWICH INGREDIENTS TO DOM ****** // 
function printSandwich(priceInput, ingredientInput) {
	document.getElementById("sandwich-details").innerHTML += `<p>The total price of your sandwich is $${priceInput}. Thanks for your order!</p>`;
	document.getElementById("sandwich-details").innerHTML += `<p>You ordered a sandwich with the following: ${ingredientInput}</p>`;
};


// ****** FUNCTION TO CLEAR VARIABLES AND CHECKBOXES IN PREP FOR NEW ORDER ****** // 
function clearInputs() {
	selectedToppingsArray = [];
	document.getElementById("sandwich-details").innerHTML = "";
	SandwichMaker.clearPrice();
	chosenMeat = [];
	chosenBread = [];
	chosenCheese = [];
	chosenVeggies = [];
	chosenCondiments = [];
	var inputsToClear = document.getElementsByTagName("input");
	for (var i = 0; i < inputsToClear.length; i++) {
		inputsToClear[i].checked = false;
	};
	activateOrder();
};


// ****** DEACTIVATE ORDER BUTTON ONCE PRESSED ****** // 
function deactivateOrder() {
	document.getElementById("order-btn").setAttribute('disabled', true);
};


// ****** REACTIVATE ORDER BUTTON ONCE "NEW ORDER" BUTTON PRESSED ****** // 
function activateOrder() {
	document.getElementById("order-btn").removeAttribute('disabled', true);
};

// ****** FUNCTIONS TO RETRIEVE CHECKBOX INFORMATION AND SEND TO INGREDIENT PRICING IIFES ****** // 
function getMeats(event) {
	meatChooser = document.getElementsByName("meat");
	meatChooser.forEach(function (element) {
		if (element.checked === true){
			chosenMeat.push(element.id);
			selectedToppingsArray.push(element.value);
		};
	});
	SandwichMaker.addMeat(chosenMeat);
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
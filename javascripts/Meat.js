console.log("Meat.js");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"ham": 3.00, "salami": 2.75, "chicken": 2.50, "turkey": 2.00, "roast_beef": 3.00, "steak": 4.00};

  
  // ham salami chicken turkey roast_beef steak

  // Augment the original object with another method
  maker.addMeat = function(inputMeats) {
    var totalMeatPrice = 0;

  	console.log("addMeat activated");
    console.log("totalMeatPrice before forEach loop", totalMeatPrice);

  	inputMeats.forEach(function(element) {
  		totalMeatPrice += meatPrices[element];
  	});
    
    console.log("totalMeatPrice", totalMeatPrice);

    SandwichMaker.addTopping(totalMeatPrice);

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
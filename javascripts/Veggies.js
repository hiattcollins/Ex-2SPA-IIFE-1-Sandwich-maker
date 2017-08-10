console.log("Veggies.js");

var SandwichMaker = (function(maker) {
 
  var veggiePrices = {"lettuce": 0.25, "tomato": 0.25, "onion": 0.25, "sweet_peppers": 0.25, "jalapenos": 0.25};
 

  maker.addVeggies = function(inputVeggies) {

    var totalVeggiePrice = 0;
  	console.log("addVeggies activated");

  	inputVeggies.forEach(function(element) {
  		totalVeggiePrice += veggiePrices[element];
  	});
    
    console.log("totalVeggiePrice", totalVeggiePrice);

    SandwichMaker.addTopping(totalVeggiePrice);
  };


  return maker;
})(SandwichMaker || {});
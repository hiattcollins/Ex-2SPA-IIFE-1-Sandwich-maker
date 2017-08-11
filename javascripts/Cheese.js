console.log("Cheese.js");

var SandwichMaker = (function(maker) {

  var cheesePrices = {"cheddar": 0.50, "swiss": 0.50, "provolone": 0.50, "pepper_jack": 0.50, "american": 0.50};
  
  maker.addCheese = function(inputCheese) {

    var totalCheesePrice = 0;

  	inputCheese.forEach(function(element) {
  		totalCheesePrice += cheesePrices[element];
  	});
    
    SandwichMaker.addTopping(totalCheesePrice);
  };

  return maker;
})(SandwichMaker || {});
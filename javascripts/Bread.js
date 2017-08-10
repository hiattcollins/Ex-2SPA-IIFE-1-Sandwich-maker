console.log("Bread.js");

var SandwichMaker = (function(maker) {

 
  var breadPrices = {"french": 2.00, "potato_roll": 1.50, "focaccia": 2.00, "sourdough": 1.50, "rye": 2.00};
  

  maker.addBread = function(inputBread) {
    var totalBreadPrice = 0;

  	console.log("addBread activated");

  	inputBread.forEach(function(element) {
  		totalBreadPrice += breadPrices[element];
  	});
    
    console.log("totalBreadPrice", totalBreadPrice);

    SandwichMaker.addTopping(totalBreadPrice);
  };


  return maker;
})(SandwichMaker || {});
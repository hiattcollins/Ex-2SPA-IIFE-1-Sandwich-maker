console.log("Condiments.js");

var SandwichMaker = (function(maker) {

  var condimentPrices = {"mayo": 0.10, "mustard": 0.10, "kumbak": 0.10, "sriracha": 0.10, "oil_vinegar": 0.10, "spices": 0.10};
  

  maker.addCondiments = function(inputCondiments) {

    var totalCondimentPrice = 0;
  	console.log("addCondiments activated");

  	inputCondiments.forEach(function(element) {
  		totalCondimentPrice += condimentPrices[element];
  	});
    
    console.log("totalCondimentPrice", totalCondimentPrice);

    SandwichMaker.addTopping(totalCondimentPrice);
  };


  return maker;
})(SandwichMaker || {});
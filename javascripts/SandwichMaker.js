console.log("SandwichMaker.js");

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("totalPrice", totalPrice);
    },
    finalPrice: function() {
    	return totalPrice;
    },
    clearPrice: function() {
      totalPrice = 0;
    }
  };

})(SandwichMaker || {});
"use strict";

const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 150;
  const totalPrice = 1395;
  const totalQuantity = 7;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    dconsole.log(`${quantity} ${product} added to the cart.
    (Shipping Cost : ${shippingCost})`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from the supplier`);
  };

  // Now returning variables we want to expose to the outer code
  return { addToCart, cart, totalPrice, totalQuantity };
}());



ShoppingCart.addToCart('Apple', 5);
ShoppingCart.addToCart("Bananas", 12);
console.log("We have access to the variables in the IIFE because of closures");
console.log('Shopping Cart : ', ShoppingCart);
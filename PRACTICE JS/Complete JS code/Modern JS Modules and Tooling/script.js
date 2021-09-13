/////////////////////////////// METHOD 1 : Named Exports //////////////////////////////////
// import {
//     totalPrice as price,
//     tq,         // name already  modified in the exporting module
//     addToCart 
// } from "./shoppingCart.js";
// console.log("Importing Module");
// console.log(`${tq} Quantity : ${price} Price`);
// addToCart('Tesla Roadster', 5);



console.log("Importing Module");


/////////////////////////////// METHOD 2 : Importing all the exports at once //////////////////////////////////
import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart('Tesla Roadster', 5);
console.log(`${ShoppingCart.tq} Quantity : ${ShoppingCart.totalPrice} Price.`)

import add from "./shoppingCart.js";

// Demonstrating live Connection between modules 
add("Hayabusa", 5);
add("Koenigsegg Agera", 5);
add("Rollce Royce", 5);
console.log('Cart Items : ', ShoppingCart.cartt);
add("This will not be added", 0);

/////////////////////////////// Exporting default and named modules together //////////////////////////////////
// not a good practice
// import add, { totalPrice as price, tq, addToCart } from "./shoppingCart.js";
// addToCart("Tesla Roadster", 5);
// console.log(`${tq} Quantity : ${price} Price`);
// add("Hayabusa", 5);
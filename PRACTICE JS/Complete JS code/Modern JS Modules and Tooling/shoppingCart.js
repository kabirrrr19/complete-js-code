console.log("Exporting Module");

const shoppingCost = 10;
// export const cart = [];
const cart = [];
export { cart as cartt };
    
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart.`);
};

const totalPrice = 1395;
const totalQuantity = 13;

export { totalPrice, totalQuantity as tq };


// Default Exports 
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart.`);
};


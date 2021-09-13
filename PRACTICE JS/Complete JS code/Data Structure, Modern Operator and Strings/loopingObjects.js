'use strict';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[3+1]]: {
      open: 11,
      close: 23,
    },
    [weekdays[3+1+1]] : {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    // the order of obj items in the fn param here is different with the order in the obj because of destructuring
    orderDelivery ( { startIndex = 1, mainIndex = 0, time = '20:00', address = 'Vegas Nevada 21' } ) {
        console.log(`Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        // console.log(otherIngredients)
      console.log(`Here is your delicious pasta with ${mainIngredient}, ${ otherIngredients.length > 0 ? otherIngredients : 'and you chose only 1 ingredient'}.`);
    }
  };

const properties = Object.keys(openingHours);
console.log('Opening Hours Keys : ', properties);

for (const day of properties) {
    console.log('key', day);
}

const values = Object.values(openingHours);
for (const day of values) {
    console.log('values of ', day);
}


for (const [day, {open, close}] of Object.entries(openingHours)) { 
    console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
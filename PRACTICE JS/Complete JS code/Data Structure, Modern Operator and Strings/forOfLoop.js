'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    order : function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    // the order of ibj items in the fn param here is different with the order in the obj because of destructuring
    orderDelivery : function ( { startIndex = 1, mainIndex = 0, time = '20:00', address = 'Vegas Nevada 21' } ) {
        console.log(`Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
    },
    orderPizza : function (mainIngredient, ...otherIngredients) {
        // console.log(otherIngredients)
      console.log(`Here is your delicious pasta with ${mainIngredient}, ${ otherIngredients.length > 0 ? otherIngredients : 'and you chose only 1 ingredient'}.`);
    }
  };

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item);
}

// to get indexes of the items \
for (const item of menu.entries()) {
    console.log(item);
}

for (const item of menu.entries()) {
    console.log(`${item[0] + 1 } : ${item[1]}`);
}

console.log('--------Using Destructuring------------');

for (const [index, name] of menu.entries()) {
    console.log(`${index + 1 } : ${name}`);
}

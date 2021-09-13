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



console.log('--------------------Or-------------------------------');
// in OR operator if the firts value is truthy it gets passed without checking the second value 
// this is called Short Circuiting
console.log( 3 || 'Kabir');
console.log('' || 0 || undefined || null); // here it doesn't have a truthy value so last value gets returned
console.log('' || 0 || undefined || 'Hello' || 23 || null);

// implementation of setting default values using short circuiting
// this solution does not work for numGuests == 0
const numGuests = undefined;
const guests1 = numGuests ? numGuests : 10;
console.log(guests1);
// using short circuiting
const guests2 = numGuests || 10;
console.log(guests2);

console.log('--------------------And-------------------------------');
// short circuiting in AND works by returning the first falsy value it finds
console.log( 0 && 'Kabir');
console.log('Kabir' && 'Hello' && 23 && null); // here it doesn't have a truthy value so last value gets returned
console.log('Kabir' && 'Hello' && 23 && undefined && 46 && 0 && null);


// Using short circuiting to check whether a property exists and calling it then
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'cheese');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'cheese', ' more cheese')
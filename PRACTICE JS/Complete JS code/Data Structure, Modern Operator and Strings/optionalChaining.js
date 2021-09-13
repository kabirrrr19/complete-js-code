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


  if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon);
  }

//   The optional chaining operator (?.) enables you to read the value of a property 
// located deep within a chain of connected objects without having to check that each reference
//  in the chain is valid.

// using optional chaining 
console.log(`${restaurant.openingHours?.Thu?.open} PM, it's almost afternoon`);

const days = weekdays;
console.log(days);
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed'; // using || gives closed on saturday
    console.log(`On ${day}, We Open at ${open === 0 ? `${open} as we're open 24*7 ` :  open  }`);
}


// optional chaining on METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

// optional chaining on ARRAYS
const users = [{ name : 'Kabir', email : 'kabir@hotmale.com'}];
console.log(users[0]?.name ?? 'User array empty');

// without optional chaining it would be like
if (users.length > 0 ) console.log(users[0].name);
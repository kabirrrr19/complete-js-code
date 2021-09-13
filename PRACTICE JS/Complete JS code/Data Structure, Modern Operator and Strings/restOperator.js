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



// SPREAD, because on the right side of the assignment operator
const unpack = [3, 4];
const arr = [1, 2, ...unpack, ...[5, 6, 7, 8]];
console.log(arr);

// REST, because on the left side of the assignment operator
const [a, b, ...pack] = arr;
console.log(a, b, pack);


const [pizza, , risotto, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, other);

// OBJECTS
const {fri, ...weekdays} = restaurant.openingHours;
console.log(fri, weekdays);


// passing multiple arguments in a function
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i <numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(`The sum of the numbers is ${sum}`);
}
const x = [23, 16, 12, 19];
add(...x);


restaurant.orderPizza('mushhroom');
restaurant.orderPizza('mushhroom', 'cheese', ' corn', ' olives');

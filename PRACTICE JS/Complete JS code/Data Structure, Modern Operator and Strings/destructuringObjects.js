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
  };

restaurant.orderDelivery( {
    time : '22:23',
    address : 'Via del Sole 21',
    mainIndex : 2,
    startIndex : 2,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);


// DEFAULT VALUES
const {
    name : restaurantName, 
    openingHours : hours, 
    starterMenu : starters = [],
    menu = [`Hello, I'm a default value for menu`],
    categories : tags 
} = restaurant;
console.log(restaurantName, hours, starters, menu, tags);


// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a : 23, b : 7, c : 14};
//here if a line starts with { js expects a code block and we can't assign a code block so we wrap it in paranthesis
({a, b} = obj);
console.log(a, b);


// NESTED OBJECTS
const {
    fri : {open : o, close : c} 
} = openingHours;
console.log(o, c);
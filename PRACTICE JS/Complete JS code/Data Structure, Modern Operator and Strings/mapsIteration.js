'use strict';

// Another method for setting items in a map
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again 🙄'],
]);
console.log(question.get('question'));
for (const [key, value] of question) {
    typeof(key) === 'number' ? console.log(`Answer ${key} : ${value}`) : '';
}

// const answer = Number(prompt('Your Answer'));
// console.log(question.get(answer === question.get('correct')));


// this is similar to array of arrays we get on calling Object.entries function()
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

  // TO CREATE MAPS FROM OBJECTS
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

  // TO CREATE ARRAYS FROM M
  console.log([...question]);
  console.log(...question.entries());
  console.log(...question.keys());
  console.log(...question.values());

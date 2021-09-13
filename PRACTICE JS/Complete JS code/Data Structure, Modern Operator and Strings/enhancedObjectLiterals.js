'use strict';
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [`It's that time of the week bitch, ${weekdays[2+2]}day`]: {
      open: 11,
      close: 23,
    },
    [`${weekdays[1+4]}urday, ${weekdays[1+4]}urday, kardi rehndi hai kudi`] : {
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
    // old syntax
    // openingHours : openingHours,
    // enhanced ES6 syntax
    openingHours,
  

    // enhanced ES6 syntax for functions
    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },
    // the order of obj items in the fn param here is different with the order in the obj because of destructuring

    // enhanced ES6 syntax for functions
    orderDelivery ( { startIndex = 1, mainIndex = 0, time = '20:00', address = 'Vegas Nevada 21' } ) {
        console.log(`Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
    },
    // old syntax for functions
    orderPizza : function (mainIngredient, ...otherIngredients) {
        // console.log(otherIngredients)
      console.log(`Here is your delicious pasta with ${mainIngredient}, ${ otherIngredients.length > 0 ? otherIngredients : 'and you chose only 1 ingredient'}.`);
    }
  };


  console.log(restaurant.openingHours);
  console.log(restaurant.order(2, 0));
  console.log(restaurant.openingHours);
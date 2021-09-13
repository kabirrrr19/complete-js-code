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
    orderPasta : function (ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and${ing3}`);
    }
  };

  const arr = [7, 8, 9];
  const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
  console.log('badNewArr : ', badNewArr);
  const newArr = [1, 2, ...arr];
  const newBadArr = [1, 2, arr];
  console.log('newBadArr : ', newBadArr);
  console.log('newArr : ', newArr); 

  const newMenu = [...restaurant.mainMenu, 'Gnocci'];
  console.log(newMenu);


// USING SPREAD OPERATOR FOR CREATING A SHALLOW COPY
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// USING SPREAD OPERATOR FOR JOINIG 2 ARRAYS
const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); 

// ITERABLES : arrays, strings, maps, etc. but Not Objects
const str = 'Kabir';
const letters = [...str, 'M'];
console.log(letters);

// const ingredients = [prompt("Let's Make Pasta! Ingredient 1?"),
//                      prompt("Ingredient 2?"),
//                      prompt("Ingredient 3?")
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);



// REST OPERATOR ON OBJECTS 
const newRestaurant = {foundedIn : 1998, ...restaurant, fouder : 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Restaurante Roma';
console.log(restaurantCopy);
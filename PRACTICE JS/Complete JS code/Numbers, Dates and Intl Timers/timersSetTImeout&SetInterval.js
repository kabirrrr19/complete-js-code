'use strict';

setTimeout( (ing1, ing2) => console.log( `Here, is your Pizzaaaaaaa...... 🍕🍕🍕 with ${ing1} and ${ing2}.`), 
    3000,
    'cheese', 
    'olives' );
console.log('Waiting.....');


const ingredients = ['Garlic', 'Mozzarella cheese', 'Parmesan cheese'];

const pizzaTimer = setTimeout( (ing) => {
    console.log( `Here, is your Pizzaaaaaaa...... 🍕🍕🍕 with ${ing.join(' and ')}.`);
    }, 4000, 
    [...ingredients ]
);

if ( ingredients.includes('Garlic') ) clearTimeout(pizzaTimer);
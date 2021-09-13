'use strict';


// ARRAYS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    movement > 0 ? console.log(`Movement ${i+1} : You deposited ${movement}.`) : console.log(`Movement ${i+1} : You withdrew ${Math.abs(movement)}.`);
}

console.log(`----------- FOREACH ------------`);
// passes 3 params : element, indexOfCurrentElement, entire Array
// Contine and break do not work in forEach Loop
movements.forEach( (movement, i, arr) => {
    movement > 0 ? console.log(`Movement ${i+1} : You deposited ${movement}.`) : console.log(`Movement ${i+1} : You withdrew ${Math.abs(movement)}.`);
});



// MAP

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

console.log(`Currencies`);
currencies.forEach( (value, key, map) => {
    console.log(`${key} : ${value} `);
});


// SET

const uniqueCurrencies = new Set(['USD', 'EUR', 'GBP', 'Pound', 'GBP', 'EUR', 'USD']);
console.log(uniqueCurrencies);
console.log('Here value and key are equal');
// "_" means a throwaway variable
uniqueCurrencies.forEach( (value, _, map) => {
    console.log(`${value}`);
});
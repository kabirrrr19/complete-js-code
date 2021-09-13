'use strict';


// STRINGS
const names = ['Kabir', 'Shreyash', 'Omkar', 'Vidit'];

console.log(names.sort());

// NUMBERS

// here sorting of this array takes place as strings so it sorts based on the first digit of the number

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());


// If a number less than zero is returned while comparing between two consecutive numbers in the array 
// then, then the value first is sorted before and if greater than zero is returned vice-versa

// return < 0, A, B (keep order)
// return > 0, A, B (switch order)
movements.sort( (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});

console.log(movements);

movements.sort( (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
});

console.log(movements);



movements.sort( (a, b) => a - b );

console.log(movements);

movements.sort( (a, b) => b - a);

console.log(movements);
'use strict';

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];


// SLICE
// DOES NOT CHANGE THE ORIGINAL ARRAY
console.log(arr.slice(2, 5));
console.log(arr.slice()); // creates a shallow copy of the array object
console.log(...arr); // creates a shallow copy of the array object


// SPLICE
//  CHANGES THE ORIGINAL ARRAY
// It's used to delete one or more elements from array
console.log(arr.splice(2, 3))
console.log(arr); 

// REVERSE 
// CHANGES THE ORIGINAL ARRAY
let arrNew = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

console.log(arrNew.reverse()); 
console.log(arrNew)

// CONCAT 
const numbers = ['1', '2', '3', '4', '5'];
const moreNumbers = ['6', '7', '8', '9'];

console.log(numbers.concat(moreNumbers));
console.log(...numbers, ...moreNumbers);
console.log([...numbers, ...moreNumbers]);


// JOIN
console.log(moreNumbers.join(', '));
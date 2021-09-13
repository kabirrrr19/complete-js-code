'use strict';

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

const x = new Array(10);
console.log(x);
console.log(x.map( (x) => 5));
x.fill(1);
console.log(x);

const y = Array.from( { length: 10 }, (_, i, arr) => i ** 3);
console.log(y);
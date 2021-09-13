'use strict';

console.log( 23 === 23.0 );

// Base 2 - 0 1 Javascript uses base 2 numbering system

// Base 10 - 0 to 9 === 1/10 = 0.1 but 

console.log(0.1 + 0.2);
console.log(0.3 + 0.6);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');


// Parsing 
// here the string should start with a number
console.log(Number.parseInt('   30px    ', 2));
console.log(Number.parseInt('   30px   ', 10));
console.log(Number.parseInt('   e23    ', 10)); // 10 is the base

console.log(Number.parseInt('   2.5rem  '));
console.log(Number.parseFloat(' 2.5rem  '));


console.log('isNan');
console.log(isNaN(20));
console.log(isNaN('20X'));
console.log(isNaN('20'));
console.log(isNaN( 23 / 0 ));

console.log('isFinite');
console.log(isFinite(20));
console.log(isFinite('20X'));
console.log(isFinite(+'20'));
console.log(isFinite( 23 / 0 ));


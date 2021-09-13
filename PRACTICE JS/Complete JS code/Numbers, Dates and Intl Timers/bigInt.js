'use strict';

console.log( 2 ** 53 - 1 );
console.log( 2 ** 53 + 1 );
console.log( 2 ** 53 + 3 );
console.log( 2 ** 53 + 6 );
console.log( 2 ** 53 + 9 );


// BIG INT

const num = 214334570924507210349723n;
const num2 = BigInt(3249832874293729427341);
console.log(num);


console.log( num + num2 );
console.log( num * num2 );
console.log( num / num2 );
console.log( 10 / 3 );
console.log( 10n / 3n );
console.log( num % num2 );
console.log('20n === 20', 20n === 20 );
console.log('20n == 20',  20n == 20 );
console.log( '20n > 15', 20n > 15 );
console.log( num * 23 );

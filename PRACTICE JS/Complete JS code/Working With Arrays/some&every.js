'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Equality
console.log(movements.includes(-130));


// SOME

// Condition returns true if its true for any element
const anyDeposits = movements.some ( mov => mov > 1500 );
console.log(anyDeposits); 


// EVERY

// Condition returns true if its true for all elements
const allDeposits = movements.every ( mov => mov > -2000);
console.log(allDeposits);



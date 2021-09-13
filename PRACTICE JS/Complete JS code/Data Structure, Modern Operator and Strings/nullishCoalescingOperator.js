// implementation of setting default values using short circuiting
// this solution does not work for numGuests == 0
const numGuests = 0;
const guests1 = numGuests ? numGuests : `Without using short circuiting, number of guests ${17}`;
console.log(guests1);
// using short circuiting
const guests2 = numGuests || `Using short circuiting, number of guests ${10}`;
console.log(guests2);


// Using Nullish Coalescing Operator
// works on the principlpe of nullish operator
const guestsCorrec = numGuests ?? `Using nullish coalescing operator, number of guests ${72}`;
console.log(guestsCorrec);   


// A property is nullish only if it's null or undefined and "empty string" and "0" exists i.e. is not null 
// Immediately Invoked Function Expressions
// These are functions that are executed just once and never again

// Since scopes are good way of protecting variables
// IIFE was created so we can protect our variables from getting overwritten by other part of the program or 
// external scripts or libraries as data inside an IIFE is encapsulated and not availbale outside of the 
// scope chain of the IIFE function
// eg : isPrivate here is encapsulated and private in the below IIFE function

(function() {
    const isPrivate = 23;
    console.log("This is an IIFE function and will only run once");
})  ();

(() => console.log("This is an IIFE ARROW function and will only run once"))  ();


// also since LET and CONST inside block create their own scope 
// we can use it to protect variables
// this is the advanced method for data privacy
// we use IIFE for variable encapsulation when we use variables declared with var $$$$$$$$$$$$$$$

{
    const isPrivate = 23;
    let isAlsoPrivate = 21;
    var isNotPrivate = 'stupid var does not have block scope';
}
console.log(isNotPrivate);
console.log(isPrivate);
console.log(isAlsoPrivate);

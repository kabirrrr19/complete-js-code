' use strict';

// Any Function always has access to the variable environment of the execution context
// in which the function was created even after the execution context is gone
// eg : here booker function is created in the execution context of the secureBooking function so it has access


let passengerCount = 69;

const secureBooking = () => {
    let passengerCount = 0;
    
    return () => {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Different Definitions

// A closure is a cloesd over variable environment of the execution context in which a function was created,
// even after that execution context is gone.

// A closure gives a function access to all the variables of it's parent function, even after that parent function
// has returned. The function keeps a reference to it's outer scope, which preserves the scope chain throughout.

// Thanks to closures a function doesn't loose connection to the variables at it's birthplace.

// A closure is like a backpack that a function carries around where it goes. This backpack has all the
// variables that were present in the environment where the function is created.

// We don't create closures.
// We can't access the closed over variable object i.e. closure object explicitly.
// Closures is not a tangible javascript object.
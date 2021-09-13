'use strict';


// Example 1

let f;

const g = () => {
    let a = 23;
    return f = () => {
        console.log( a * 2 );
    }
}

const h = () => {
    const b = 123;
    f = () => {
        console.log( b * 2 );
    };
}

g();
f();
// This function "f" keeps closure scope of "g" function as it was created in execution contect of "g" function
console.dir(f);

// Reassigned f function
h();
f();
// This function "f" keeps closure scope of "h" function as it was created in execution contect of "h" function
console.dir(f);



// Example 2

// here we have access to perGroup because of closure

const boardPassengers = (n, wait) => {
    const perGroup = n / 3;

    setTimeout( () => {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    },wait * 1000);

    console.log(`Will start boarding in ${wait} seconds.`);
}

// setTimeout(function () {
//     console.log('Timer');
// }, 1000);
const perGroup = 1000; // This is not used as closures have priority over scope chain.
boardPassengers(180, 3);
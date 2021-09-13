'use strict;'

const temperature = [];

const entries = () => {
    for(let i = 0; i < 10; i++) {
        temperature.push(Math.trunc(Math.random() * 20));
        if ( i === 5) temperature.push('error');
    }
};
entries();
console.log(temperature);
// IIFE (Immediately Invoked Function Expression)  Arrow function
// ( () => {
//     for(let i = 0; i < 10; i++) {
//         temperature.push(Math.trunc(Math.random() * 20));
//         if ( i === 5) temperature.push('error');
//     }
// })();
// console.log(temperature);

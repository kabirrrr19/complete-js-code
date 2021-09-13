'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// We can chain a method after another one if it returns an array
// chaining tons of methods one after the other can cause real performance issues if we have really huge arrays



// PIPELINE 
const depositInUSD = movements  
    .filter( mov => mov > 0 )
    .map( mov => mov * euroToUSD )
    .reduce( (mov, acc) => acc + mov );

console.log('depositInUSD no debugging', depositInUSD);




console.log('for debugging in a pipeline');
const depositInUSD2 = movements  
    .filter( mov => mov < 0 )
    .map( (mov, i, arr) => { 
        console.log(arr);
        return mov * euroToUSD;
    }) 
    .reduce( (mov, acc) => acc + mov );
console.log('depositInUSD2 debugging', depositInUSD2);

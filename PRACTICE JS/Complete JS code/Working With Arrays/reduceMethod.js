'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// accumulator (acc) ==> what the array is reduced to and it is returned ==> SNOWBALL
// acc: It's used to specify the initialValue, or the previously returned value of the function.
// it keeps accumulating the value that we ultimately want to return
const balance = movements.reduce((acc, mov, i, arr) =>  acc + mov, 0);
// The 0 is the initial value of the accumulator
console.log(balance);



let balance2 = 0;
for (const mov of movements) {
    balance2 += mov;
}
console.log(balance2);


// To get the maximum value of an array
const maxNumber = movements.reduce( ( acc, mov ) => {
    if (acc > mov){
        return acc;
    }
    else {
        return mov;
    }
}, movements[0]);
console.log(`The Maximum Number in the Array is ${maxNumber}`);



const minNumber = movements.reduce( ( acc, mov ) => {
    if (acc < mov){
        return acc;
    }
    else {
        return mov;
    }
}, movements[0]);
console.log(`The Minimum Number in the Array is ${minNumber}`);
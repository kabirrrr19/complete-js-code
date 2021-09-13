'use strict';

// how js converts strings to objects so that it is able to call methods on them is called boxing
const str = 'Atul';
console.log(str);
console.log(typeof str);
console.log(new String(str));
console.log(typeof str);



const airline = 'Air India Airlines';
const plane = 'B302';

// indexing begins with 0
console.log(plane[0]);
console.log(plane[1]);
console.log('position 1 in A702 : ', 'A702'[1]);

// length method
console.log('Length of plane and airline string : ', plane.length, airline.length,' and length of B99 ', 'B99'.length);

console.log('index of r', airline.indexOf('r'));
console.log('last indec of r', airline.lastIndexOf('r'));
console.log('Index of India', airline.indexOf('India'));

console.log('airline slicing from index 4', airline.slice(4));
console.log('airline slicing between index 4 and 7', airline.slice(4, 7));

console.log('airline slicing from the first space', airline.slice(airline.indexOf(' ')));
console.log('airline slicing from the last space', airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-5));
console.log(airline.slice(2, -5));

// function to check for middle seats

const checkMiddleSeat = function(seat) {
    // strings having B and E are middle seats in small planes
    const s = seat.slice(-1);
    s === 'B' || s === 'E' ? console.log(`${seat} is a Middle Seat`) : 
            console.log(`${seat} is not a Middle Seat`);
;}
checkMiddleSeat(`11B`);
checkMiddleSeat(`22A`);
checkMiddleSeat(`34C`);
checkMiddleSeat(`19E`);
checkMiddleSeat(`23A`);
checkMiddleSeat(`16B`);

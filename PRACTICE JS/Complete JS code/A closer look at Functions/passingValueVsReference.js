'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Atul Mishra',
    passport : 12345678
}

const checkIn = (flight, passenger) => {
    flight = 'LH299';
    console.log(`${flight} in checkIn function`);
    passenger.name = 'Jake Peralta';
    passenger.passport === 12345678 ? alert('Checked IN') : alert('Wrong Passport');
}


// Here flight is passed as values and 
// checkIn(flight, passenger);
console.log(`${flight} in the global scope`);
console.log(jonas);

// example on interaction of different functions with the same object can do
const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 100000000000);
    console.log(`new passport number : ${person.passport}`);
}

newPassport(jonas);
checkIn(flight, jonas);
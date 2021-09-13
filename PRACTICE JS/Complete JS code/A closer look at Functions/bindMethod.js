'use strict';

const lufthansa = {
    airline : 'lufthansa',
    iataCode : 'LH',
    bookings : [],
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    }
};

const book = lufthansa.book;

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

const bookEW = book.bind(eurowings);
bookEW(514, 'Robert Baratheon');

const bookLH = book.bind(lufthansa);
bookLH(723, 'Eddard Stark');

const bookLX = book.bind(swiss);
bookLX(911, 'Rhaegar Targaryen');

// Setting other parameters along with the this object
const bookLH453 = book.bind(lufthansa, 453);
bookLH453('Gregor Clegane');
bookLH453('Sandor Clegane');

// Bind can be used to set default values for functions
const addTax = (rate, value) => console.log( value + value * rate);
const addVAT = addTax.bind(null, 0.23);
const addGST = addTax.bind(null, 0.18);

addTax(0.1, 1200);
addVAT(1200);
addGST(1200);

// Implementing the above solution without bind using function returning function
console.log('               Using Function Returning Function');
const addTaxRate = rate => value =>  console.log(value + value * rate);
const addVAT2 = addTaxRate(0.23);
const addGST2 = addTaxRate(0.18);

addVAT2(1200);
addGST2(1200);
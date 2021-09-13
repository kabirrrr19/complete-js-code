'use strict';

const lufthansa = {
    airline : 'lufthansa',
    iataCode : 'LH',
    bookings : [],
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    }
}

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// doesn't work as its a function now and not a method of an object so the this keyword can't find the airline property
// book(23, 'Sarah Williams');
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
// The Call method 
console.log('                     Using the Call Method');
book.call(eurowings, 314, 'Cersie Lannister');
book.call(lufthansa, 217, 'Danaerys Targaryen');
book.call(swiss, 323, 'Jon Snow');

// Apply Method
// The apply method does the exact same thing but the only difference is that it doesn't recireve a list of arguments
// after the this keyword but takes an array of arguments

const passengerCersie = [31, 'Cersie Lannister'];
const passengerDany = [27, 'Danaerys Targaryen'];
const passengerJon = [23, 'Jon Snow'];
console.log('                    Using the Apply Method');
book.apply(eurowings, passengerCersie);
book.apply(lufthansa, passengerDany);
book.apply(swiss, passengerJon);

// For using the call method with arrays 
book.call(swiss, ...passengerJon);
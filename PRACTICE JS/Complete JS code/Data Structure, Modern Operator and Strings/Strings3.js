'use strict';

console.log('a+very+nice+string'.split('+'));
console.log('Omkar Naik'.split(' '));

const [firstName, lastName] = 'Omkar Naik'.split(' ');

const nameOnRecord = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(nameOnRecord);

// function to create capitalized name
const capitalizeName = (personName) => {
    const name = personName.toLowerCase().split(' ');
    const namesUpper = [];
    for (const n of name) {
       namesUpper.push( n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jeSSica anN smIth daVis');
capitalizeName('atul RajEsh miShra');


const anotherMethod = (personName) => {
    const name = personName.toLowerCase().split(' ');
    const namesUpper = [];
    for (const n of name) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
anotherMethod('shreyash Amit seTh');
anotherMethod('kriTIka rajendra khanDeLwal');


// Padding a string means to add a number of characters to the string until the string has a certain desired length
const message = 'Go to gate 23!';
console.log(message.padStart(25, "*").padEnd(37, "*"));


// Padding in real life means 
const maskCreditCard = (number) => {
    // const str = String(number);
    const str = number + ''; // works same as above
    const last = str.slice(-4);
    console.log(last.padStart(str.length, '*'));

}

maskCreditCard(7658385492750227);
maskCreditCard('2934850923458345');


// REPEAT 
const weatherMessage = 'Bad Weather... All departures Delayed...';
console.log(weatherMessage.repeat(5));

const planesInLine = (n) => {
    console.log(`There are ${n} planes in line  ${'🛫'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(3 * 4);

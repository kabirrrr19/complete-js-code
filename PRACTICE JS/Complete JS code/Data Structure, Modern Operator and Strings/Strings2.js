'use strict';

// to correct a passengers name in capitalization
const nameCorrect = (name) => {
    const nameLower = name.toLowerCase();
    const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
    console.log(correctName);
}
nameCorrect('kAbIRrRRrrrrrrrrrrrr');
nameCorrect('aTUl');

// to correct capitalizations and spaces in email name
const emailCorrect = (email) => {
    const correctEmail = email.toLowerCase().trim(); // we also have trimStart and trimEnd
    console.log(correctEmail);
    // console.log(correctEmail == email);
}
emailCorrect('  HelLo@KabIR.iO   ');
emailCorrect('  himYnamEIs@aTul.io   ');


// REPLACING..
const priceIN = 'Rs 28,897';
const priceUS = priceIN.replace('Rs', '$').replace(',', '.');
console.log(`price in India : ${priceIN} and price in USA : ${priceUS}`);

const announcement = 'All passengers come to boarding "door" 23! Boarding "door" 23!!!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));


// Booleans ~~~ making decisions based on string contents
const plane = 'Airbus B320neo';

console.log(plane.includes('B320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));
console.log(plane.endsWith('0neo'));

if ( plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the new Airbus Family!!!');

// Practice exercise
const checkBaggage = (items) => {
    const baggage = items.toLowerCase();
    baggage.includes('knife') || baggage.includes('gun') ? console.log(`You're NOT allowed onboard`) 
    : console.log(`Welcome aboard`);
}

checkBaggage(`I have a laptop, some Food and a pocket knife`);
checkBaggage(`Socks and camera only`);
checkBaggage(`Got some snacks and a gun for protection`);
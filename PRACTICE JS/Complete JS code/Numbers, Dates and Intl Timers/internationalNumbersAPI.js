'use strict';

const now = new Date();
const locale = navigator.language;
const options = {
    hour : 'numeric', 
    minute : 'numeric', 
    day : 'numeric', 
    month : 'long',
    year : 'numeric',
    weekday : 'long', 
}
const time = document.getElementById('header');
time.innerHTML = new Intl.DateTimeFormat('en-US', options).format(now);


const num = 23897526.12;

const options2 = {
    style : 'currency',
    unit : 'mile-per-hour',
    currency : 'INR',
}

// console.log('US:       ', new Intl.NumberFormat('en-US', options2).format(num));
// console.log('INDIA:    ', new Intl.NumberFormat('hi-IN', options2).format(num));
// console.log('Germany:  ', new Intl.NumberFormat('de-DE', options2).format(num));
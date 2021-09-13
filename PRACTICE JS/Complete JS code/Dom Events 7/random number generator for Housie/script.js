'use strict;'

const number = document.querySelector('.number');
const input = document.querySelector('.input');
const checkBtn = document.querySelector('.check');
const message  = document.querySelector('.message');

let numArray = [];

const clearNum = () => {
    number.innerHTML = '?';
}

document.querySelector('.btn').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 90) + 1;
    if ( numArray.includes(secretNumber) ) {
        clearNum();
    }
    else {
        number.innerHTML = secretNumber;
        numArray.push(secretNumber);
        // valSort = numArray.sort();
        console.log(numArray);
    }
});


// input.addEventListener('onmouseover', () => {
//     console.log(input.numArray);
// })
// console.log(numArray.includes(10));

checkBtn.addEventListener('click', () => {
    val = Number(input.value);                     // TYPECASTING THE INPUT VALUE FROM STRING DEFAULT TO NUMBER
    console.log(val);
    if ( numArray.includes(val) ) {
        message.innerHTML = `${val  } Present at ${ numArray.indexOf(val) + 1}`;
        input.value = '';
    }
    else if ( val == '' || val > 90) {
        message.innerHTML = 'Invalid Input';
    }
    else {
        message.innerHTML = 'Not Present';
    }
});
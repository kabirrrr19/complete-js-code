'use strict';

const poll = {
    question : 'What is your favorite programming language?',
    options : [' 0 : Javascript ', ' 1 : Python ', ' 2 : Rust ', ' 3 : C++ '],
    answers : new Array(4).fill(0),

    registerNewAnswer () {
        const answer = Number(prompt(`${this.question} ${this.options.join(' \n ')} \n (Write Down Option Number)`));
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++; 
        this.displayResults();
    },

    displayResults (type = 'array') {
        console.log(`Poll Results are  ${this.answers.join(', ')}`);
    },

};

document.querySelector('.button-right').addEventListener('click', poll.registerNewAnswer.bind(poll));
 
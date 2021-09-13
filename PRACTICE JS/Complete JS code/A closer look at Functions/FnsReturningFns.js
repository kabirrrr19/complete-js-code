'use strict';

const greeting = greeting => name => console.log(`${greeting} ${name} ${this}`);

const greetingHey = greeting('Hey');
greetingHey('Kabir');
greetingHey('Shreyash');
greeting('Hello')('Kabir');
console.log(`The greetingHey variable stores  :  ${greetingHey}`);
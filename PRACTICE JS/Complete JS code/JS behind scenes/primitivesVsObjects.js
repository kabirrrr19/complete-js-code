// Source of Confusion
let age = 20;
let oldAge = age; 
age = 21;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Atul',
    age: 20,
};
const friend = me;
friend.age = 21;
console.log('Friend', friend);
console.log('me', me);
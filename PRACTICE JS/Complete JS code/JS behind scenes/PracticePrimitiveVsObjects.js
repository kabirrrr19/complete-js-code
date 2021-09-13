let lastName = 'Greene';
let oldlastName = lastName;
lastName = 'Geller';
console.log(oldlastName);
console.log(lastName);

const jessica = {
    name: 'jessica',
    lastName: 'Geller',
    age : 27
};
const marriedjessica = jessica;
jessica.lastName = 'Bing';
console.log(`Before marriage ${jessica.lastName}`);
console.log(`After marriage ${marriedjessica.lastName}`);
//the changes to the object here are made in the heap memory and not the stack so it doesn't affect const property
// we can't make changes to the value in stack for eg
// marriedjessica = {};



// Solution to the above problem
const jessica2 = {
    name: 'jessica',
    lastName: 'Buffay',
    age : 27,
    family : ['Mom', 'Dad']
};

// Object.assign only works on the first level i.e. it only creates a shallow copy
// If we have an object inside an object then the inner object will still be the same
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Tribbiani';
jessicaCopy.family.push('Joey', 'Mike');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
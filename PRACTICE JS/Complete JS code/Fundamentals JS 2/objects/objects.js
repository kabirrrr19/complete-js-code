const atul = {
    firstName : 'Atul',
    lastName : 'Mishra',
    birthYeah : 2001,
    job : 'Student',
    friends : ['Shreyash', 'Vidit', 'Rahul'],
    hasDriversLicense : false,

    // calcAge : function(birthYeah) {
    //     return 2021 - birthYeah;
    // }

    // to avoid calculating age everytime calcAge is called
    // calcAge : function() {
    //     return 2021 - this.birthYeah; 
    // }

    // instead store it in a variable and use when needed 
    calcAge : function() {
        this.age = 2021 - this.birthYeah;
        return this.age;
    },

    getSummary : function() {
        this.summary =`${this.firstName} is a ${this.calcAge()} year old ${this.job} and he ${this.hasDriversLicense ?
            `has a` : `does not have a`} Drivers License.`;
        return this.summary;
    }
};
console.log(atul);

console.log(atul.calcAge()); 
console.log(atul['calcAge']()); 

// const interstedIn  = prompt('what do you wanna know about me? Choose between firstName, lastName, age, job, friends');
// console.log(atul[interstedIn]);
// console.log(atul.interstedIn);  This doesn't work 

const nameKey = 'Name';
console.log(atul['first' + nameKey]);
console.log(atul['last' + nameKey]);
// we can evaluate expressions to access the properties it doesn't work in dot notation
// console.log(atul.'first' + nameKey);

console.log(`${atul.firstName} has ${atul.friends.length} friends and his best friend is ${atul.friends[0]}.`);
console.log(atul.getSummary());
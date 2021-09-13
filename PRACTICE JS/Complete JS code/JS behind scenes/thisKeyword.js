console.log(this);  // In browser, this will point to the window object

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1996);

const calcAgeArrow = (birthYear) => {
    console.log('-----------------------Arrow Function------------------------------');
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1996);

const jonas = {
    year : 2001,
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year)
    }
};
jonas.calcAge();


const matilda = {
    year : 2005,
};

// Method Borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
// HERE IT IS NAN BECAUSE THERE IS NO OWNER OF THE FUNCTION ITS A REGULAR FUNCTION SO THIS IS UNDEFINED OR NAN
 const f = jonas.calcAge;
 f();
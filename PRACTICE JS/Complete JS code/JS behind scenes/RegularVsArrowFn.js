var firstName = 'Kabir'; // variables declared with var create properties on the global object
// never use arrow function as a method
// A method, like a function, is a set of instructions that perform a task. 
// The difference is that a method is associated with an object, while a function is not.
const jonas = {
    firstName: 'Atul',
    year : 2001,
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year);

        const isMillenial = function() {
            console.log(this.year >= 1981 && this.year <= 2002);
        };
        isMillenial();
    },

    greet : () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

    greetAgain : function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.greetAgain();
jonas.calcAge();


// Arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(1, 2); 

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2, 4);
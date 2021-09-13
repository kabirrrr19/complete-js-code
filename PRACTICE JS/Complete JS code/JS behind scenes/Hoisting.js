// VARIABLES HOISTING

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Atul';
let job = 'Student'
const year = 1991;



// FUNCTION HOISTING

console.log(addDecl(2, 3));
// CHANGE THE CONST OF addArrow AND addExpr to var and it will show undefined 
// console.log(addExpr);
// console.log(addArrow);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => { a + b };   



// EXAMPLE ON PITFALLS OF HOISTING AND 
// WHY TO NOT USE VAR

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}



// EXAMPLE

// VARIABLES DECLARED WITH LET AND CONST DO NOT CREATE PROPERTIES ON THE WINDOW OBJECT 
// look at the window object only x:1 is defined 
// run this code in the browser
console.log(x);
// console.log(y);
// console.log(z);

var x = 1;
let y = 2;
const z = 3;

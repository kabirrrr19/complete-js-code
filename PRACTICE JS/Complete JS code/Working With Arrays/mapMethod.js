'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

// using map (functional programming)
const movementsUSD = movements.map( mov =>  mov * euroToUSD ); 

const movementsUSDfor = [];
for (const mov of movements) {
    console.log(mov);
    movementsUSDfor.push( mov * euroToUSD );
} 

const movementsUSDforeach = [];
movements.forEach( (mov) => {
    movementsUSDforeach.push(mov * euroToUSD);
})

console.log('movements' ,movements);
console.log('movementsUSD', movementsUSD);
console.log('movementsUSDfor', movementsUSDfor);
console.log('movementsUSDforeach', movementsUSDforeach);



const movementDescription = movements.map ( (mov, i, arr) => 
    ` Movements ${i + 1} : You ${ mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(mov)} `
);
console.log(movementDescription)

// if ( mov > 0 ) {
//     return ` Movements ${i + 1} : You deposited ${mov} ` ;
// }
// else {
//     return ` Movements ${i + 1} : You withdrew ${Math.abs(mov)} ` ;
// }

'use strict';
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
const accounts = [account1, account2, account3, account4];


const arr = [ [1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [ [1, 2, [3, 4, [5, 6, [7]]]], [8, 9, [10]], 11, 12, 13, 14, 15];
console.log(arrDeep);
console.log('arrDeep level default deep', arrDeep.flat());
console.log('arrDeep level 1 deep', arrDeep.flat(1));
console.log('arrDeep level 2 deep', arrDeep.flat(2));
console.log('arrDeep level 3 deep', arrDeep.flat(3));
console.log('arrDeep level 4 deep', arrDeep.flat(4));
// Flat accepts the deep levels to which it can flatten the arrays


// const allMovements = accounts.map( acc => acc.movements);
// console.log('Nested Movements array', allMovements);
// const flatAllMovements = allMovements.flat();
// console.log('Flattened Movements array', flatAllMovements);




const overallBalance =accounts
    .map( acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log('Bank Turnover array using Map', overallBalance );


// flatMap 
const overallBalance2 =accounts
    .flatMap( acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log('Bank Turnover array using flatMap', overallBalance );
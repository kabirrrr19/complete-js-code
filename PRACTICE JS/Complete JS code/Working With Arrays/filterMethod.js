'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter ( mov => mov > 0);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
    if (mov>0) depositsFor.push(mov);
}
console.log(deposits);

const withdrawls = movements.filter ( mov => mov < 0);
console.log(withdrawls);
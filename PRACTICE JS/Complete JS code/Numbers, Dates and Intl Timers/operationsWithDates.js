'use strict';

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1)/(1000 * 60 * 60 * 24);
console.log(calcDaysPassed(new Date(2037, 10, 11, 15, 23), future));
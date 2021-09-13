'use strict';

const calcAge = birthYear => 2021 - birthYear;
console.log(calcAge(2001));

const calcAge2 = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 60- age;
    return retirement;
}
console.log(calcAge2(2001));

const calcAge3 = (firstName, birthYear) => {
    const age = 2021 - birthYear;
    const retirement = 60- age;
    return `${firstName} is gonna retire in ${retirement} years.`;
}
console.log(calcAge3("Atul", 2001));
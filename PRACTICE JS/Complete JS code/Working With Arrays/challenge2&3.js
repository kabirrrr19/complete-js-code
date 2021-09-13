'use strict';

const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

// // task 1 : convert dogAge to humanAge

// const humanAge = dogAge1.map( (dogAge, i) => {
//     if (dogAge <=2 ) {
//         return 2 * dogAge;
//     }
//     else {
//         return 16 + dogAge * 4;
//     }
// });
// console.log(`Original Age of the Dogs :  ${dogAge1}`)
// console.log(`Human Age of the Dogs : ${humanAge}`);
// // displaying arrays in template literals
// console.log(`Original Age of the Dogs :  ${JSON.stringify(dogAge1)}`)
// console.log(`Human Age of the Dogs : ${JSON.stringify(humanAge)}`);


// // task 2 : exclude dogs greater than 18 humanAge
// const adultDog = humanAge.filter ( ( age ) => age > 18);
// console.log(`Adult dog is ${JSON.stringify(adultDog)}`);


// // task 3 : average of adultDog age 
// const average = adultDog.reduce( (acc, age, i) => acc + age)/adultDog.length;
// console.log(`Average of the age of Adult Dogs is ${average}`);


const averageHumanAge = (dogAge1) => {
    const humanAge = dogAge1.map( dogAge => dogAge <= 2 ? 2*dogAge : 16 + 4*dogAge);
    const adultDog = humanAge.filter ( ( age ) => age > 18);
    const average = adultDog.reduce( (acc, age, i, arr) => acc + age/arr.length, 0);
    console.log('humanAge', humanAge);
    console.log('adultDog', adultDog);
    console.log('average', average);
    return average;
}

averageHumanAge(dogAge1);
averageHumanAge(dogAge2);


// Challenge 3 
const averageHumanAge1 = age => {
    const average2 = age
        .map( age => age <= 2 ? 2*age : 16 + 4*age)
        .filter ( age => age > 18 )
        .reduce( (acc, age, i, arr) => acc + age/arr.length, 0);
    console.log('Average Using Method Chaining of Map, Filter & Reduce : ', average2);
}

averageHumanAge1(dogAge1);
averageHumanAge1(dogAge2);

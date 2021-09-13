'use strict';

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];


  // task 1
  dogs.forEach( dog => (dog.recFood = dog.weight ** 0.75 * 28));
  console.log(dogs);


  // task 2
  const sarah = dogs.find(dog => dog.owners.includes('Sarah'));
  sarah.curFood > sarah.recFood ? console.log(`${sarah.owners} dog is eating too much`) : console.log(`${sarah.owners} dog is eating too little`);
  

 // task 3
 const ownerEatsTooMuch = dogs.filter( dog => dog.curFood > dog.recFood ).flatMap( dog => (dog.owners));
 const ownerEatsTooLittle = dogs.filter( dog => dog.curFood < dog.recFood ).flatMap( dog => (dog.owners));
 console.log(ownerEatsTooMuch);
 console.log(ownerEatsTooLittle);


 // task 4
 console.log(`${ownerEatsTooMuch.join(' and ')}'s dogs eat too much!`);
 console.log(`${ownerEatsTooLittle.join(' and ')}'s dogs eat too little!`);


 // task 5
 console.log('dog eating the correct amount of food ', dogs.some( dog => dog.recFood === dog.curFood));



const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10 ;

 // task 6
 console.log(dogs.some( checkEatingOkay ) );


 // task 7
 console.log('dogs eating okay ', dogs.filter( checkEatingOkay));


 // task 8
 const sorted = dogs.slice().sort( (a, b) => a.recFood - b.recFood );
 console.log(sorted);
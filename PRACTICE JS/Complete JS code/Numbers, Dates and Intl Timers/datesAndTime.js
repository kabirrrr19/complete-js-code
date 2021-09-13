'use strict';

const now  = new Date();
console.log(Date.now()); // current timestamp
    // console.log(now);
    // console.log( new Date('23 Aug 2020 7:20:69') );
    // console.log( new Date('Feb 4, 2021') );
    // console.log(new Date( 2022, 1, 4, 10, 30, 12) ); // ( year, month, day, hour, minute, second)
    // // the month here is 0 based
    // console.log(new Date( 2069, 10, 35 ) );


// the amount of milliseconds since the beginning of the unix system
console.log(new Date(0) );

// timestamp 3 days after the creation of the unix system
console.log(new Date( 3 * 24 * 60 * 60 * 1000 ) );

const future = new Date(  2069, 10, 35, 10, 30, 12);
console.log(future);
console.log('Year', future.getFullYear(), 'Month', future.getMonth(), 'Date', future.getDate(),
 'Day is the number of the day in the week', future.getDay(), 'Hours', future.getHours(), 'Minutes',
  future.getMinutes(), 'Seconds', future.getSeconds());

console.log('ISO string of future variable', future.toISOString() );
console.log('Timestamp Method', future.getTime());

// We have similar SET methods as the GET methods

future.setFullYear(2040);
console.log(future); 
// Build a thermometer from an array of temperatures of one day and calculate the 
// temperature amplitude. There can also be error sometimes.


const temperature = [-3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let max = temperature[0];
let min = temperature[0];
const calcTempAmplitude = function(temps) {
    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;
        if (temps[i] > max) max = temps[i]; 
        if (temps[i] < min) min = temps[i];
    }
    return max - min;
}   

console.log('Amplitude of the Temperatures from today is', calcTempAmplitude(temperature));


// Understanding the problem questions

//what is amplitude ? 
//amplitude is the difference between the highest and the lowest value
// how to compute max and min temperatures? 
// what is a sensor error? 
// Ignore

// Breaking into sub-problems
// How to ignore errors?
// How to find the min and max temperature array?
//  Subtract min and max temperature?
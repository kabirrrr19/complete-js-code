// Suppose the manager now says the function should receive not one but two temperature arrays

// Questions for the Problem : function should now receive two arrays 
// do we need to implement same solution to two arrays?
// No just merge two arrays

// Sub-problems
// How to merge two arrays?

const temperature1 = [-3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperature2 = [-1, -5, -11, 0, 'error', 2, 1, 6, 14, 16, 9];


const calcTempAmplitude = function(t1, t2) {
    temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;
        if (temps[i] > max) max = temps[i]; 
        if (temps[i] < min) min = temps[i];
    }
    return max - min;
}   

console.log('Amplitude of the Temperatures from today is', calcTempAmplitude(temperature1, temperature2)); 
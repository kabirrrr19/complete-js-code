'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age} years old, born in ${birthYear           }.`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996 ) {
            var millenial = true;
            // Creating new variable with same name as OUTER SCOPE's VARIABLE
            const firstName = 'Kabir';
            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            
            function add(a, b) {
                return a + b;
            }

            console.log(output);

        }
        console.log(millenial);
        console.log(output);

        // console.log(add(2, 3)); // This gives an error because functions in JS are 
        //also block scoped in STRICT MODE
        //console.log(str);// CHANGE THE STR FROM CONST TO VAR AND IT WON'T GIVE THIS ERROR

        // As const str is accesible only inside the if block as it's block scoped whereas the
        // var millenial is accessed inside the entire function as its function scopedx
    }
    printAge();
    return age;
}

// console.log(output);
const firstName = 'Atul';
console.log(calcAge(1993));
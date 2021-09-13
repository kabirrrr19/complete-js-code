const oneWord = (str) => str.replace(/ /g, '').toLowerCase();

const upperFirstWord = (str) => {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}

// Higher Order Function
const transformer = (str, fn) => {
    console.log(`Original string : ${str}`);
    console.log(`Transformed string : ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`);
}

transformer('Javascript is the best language', upperFirstWord);
transformer('Javascript is the best language', oneWord);


// JS uses callbacks functions all the time as it helps create reusable and interconnected code 
// and also it helps us to create abstraction in our code like the above transformer function 
// it is not concerned about the methods it only is concerned about transforming the string and not how we do it

const high5 = () => console.log('👋');
['Kabir', 'Shreyash', 'Vidit'].forEach(high5);


// example

const square = (num) => num * num;

const squareRoot = (num) => Math.sqrt(num);

const numTransform = (num, fn) => {
    console.log(`Original Number : ${num}`);
    console.log(`Transformed Number : ${fn(num)}`);
    console.log(`Transformed by : ${fn.name}`);
}

numTransform(12, square);
numTransform(69, squareRoot);

// 
// maps hold data like objects in key-value pairs
// The difference between maps and objects is that in objects te key is always a strings
// whereas in a map the key can be anything, it can be objects, arrays and even another map

const rest = new Map();
rest.set('name', 'Captain Jack');
rest.set(1, 'Los Angeles');
rest.set(2, 'Las Vegas');
rest.set('categories' , ['Italina', 'Pizzeria', 
            'Vegetarian', 'Organic'])
            .set('open', 11)
            .set('close', 23)
            .set(true, 'We are open :D')
            .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// use of setting values in maps to true and false
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(1);

console.log(rest.size);

// rest.set([1,2], 'Test');
// console.log(rest.get([1,2]));
// The above code won't work cuz both the [1, 2] objects are different in the memory heaps

rest.set(document.querySelector('h1'), 'Heading');
const arr = [1,2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
console.log(rest);


// to delete the entire map
// rest.clear();


const map = new Map();
map.set(0, 'Atul');
map.set(1, 'Kabir');
map.set(3, 'Shreyash');
map.set(4, 'Omkar');
map.set(5, 'Pandit');
map.set(6, 'Vidit');
console.log(map);

// The main use case of Sets is to remove duplicate values from Arrays

const orderSet = new Set( ['Pasta', 'Pizza', 'Frankie', 'Sandwich', 'Pizza'] );

console.log(orderSet);
console.log(orderSet.has('Bread'));
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Frankie');
console.log(orderSet);

// to clear the set
// orderSet.clear();
console.log(new Set());

console.log(new Set('Jonas'));

for (const food of orderSet) {
    console.log(food);
}

// Use case Example
// you can not retrieve elements from a set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// to count the unique elements in an array
console.log(new Set(staff).size);

// to find unique alphabets in a name
console.log(new Set('Atul Mishra').size);


// to find unique numbers in a Phone number
console.log(new Set('8805787962').size);

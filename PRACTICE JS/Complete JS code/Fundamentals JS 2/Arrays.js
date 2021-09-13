const friends = ['Shreyash', 'Vidit'];
console.log(friends);

friends.push("Omkar");
console.log(friends);

friends.unshift("Pandit");
console.log(friends);

console.log("   Index of Vidit ",friends.indexOf("Vidit"));
console.log("   Length of Friends array ",friends.length);
console.log("   Friends Array Includes", friends.includes("Jay"));

// Deletes the first element
friends.pop();
console.log(friends);

// Deletes the first element
friends.shift();
console.log(friends);

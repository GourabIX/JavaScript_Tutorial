// Arrays in ES5

const friends = ["Gourab", "Mrinmoy", "Suphal"];
console.log(friends);
friends.forEach(function (current, index, array) {
    current = current + index.toString();
    array[index] = current;
})
console.log(friends);
console.log("---------------------------------------");

// ES6

const friends6 = ["Gourab", "Mrinmoy", "Suphal"];
console.log(friends6);
friends6.forEach((current, index, array) => array[index] = current + index.toString());
console.log(friends6);
console.log("---------------------------------------");
console.log(Array.from(friends));          // we can use 'from' method to convert nodeLists to arrays.

// In ES5, forEach and map methods cannot use "break" or "continue" statements.
// If we want to use break or continue, we must resort to the default for loop.

for (var i = 0; i < friends.length; i++) {
    if (friends[i].includes("Mrinmoy")) continue;
    console.log(friends[i]);
}
console.log("---------------------------------------");

// In ES6, there's a new Loop. It's called the for of loop.
// We can use continue and break statements in the for of loop.

for (const current of friends6) {
    if (current.includes("Suphal")) continue;
    console.log(current);
}
console.log("---------------------------------------");

// Maps in ES5
var ages = [23, 16, 17];
var fullAgeStatus = ages.map(function (current) {
    return current >= 18;
})
console.log(fullAgeStatus);
console.log(ages[fullAgeStatus.indexOf(true)]);
console.log("---------------------------------------");

// ES6
// In ES6, for the simple task as shown above in the maps section, there's
// no need to write so much code. There are 2 new methods: findIndex and find.

console.log("Index of full age element: " + ages.findIndex(current => current >= 18));
console.log("Full age element: " + ages.find(current => current >= 18));
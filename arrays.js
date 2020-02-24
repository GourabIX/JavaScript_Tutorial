// initialize new array
var friends = ["Mrinmoy", "Atanu", "Sisir"];                           // common way
var randomIntegers = new Array(2020, 2200, 2208, 2209, 2650);         // another way.

console.log(friends);
console.log(friends[0], friends[1]);
console.log(randomIntegers[2]);
console.log(randomIntegers.length);             // array.length returns the size of the array

friends[0] = "Mrinmoy - Heavy";
friends[friends.length] = "Meghnad";
console.log(friends);

var mixedDataTypes = ["Hello", "Johnny", 96, true, "crash"];
console.log(mixedDataTypes);

mixedDataTypes.push("Blue");                        // appends elements to end of an array,
                                                    // returns new length of the array
mixedDataTypes.unshift("Expecto Patronum!");        // inserts elements to start of an array
console.log(mixedDataTypes);

mixedDataTypes.pop();           // removes last element from an array and returns it
mixedDataTypes.shift();         // removes first element from an array and returns it
console.log(mixedDataTypes);

console.log(mixedDataTypes.indexOf("Johnny"));
console.log(mixedDataTypes.indexOf(96));
console.log(mixedDataTypes.indexOf(true));

console.log( friends.indexOf("Mrinmoy") === -1 ? "Mrinmoy is NOT a friend." : "Mrinmoy is a friend." );
console.log( friends.indexOf("Mrinmoy - Heavy") !== -1 ? "Mrinmoy - Heavy is a friend." : "Meh" );
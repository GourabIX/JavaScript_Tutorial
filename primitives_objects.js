var a = 23;
var b = a;
a = 1996;
console.log(a, b);

var gourab = {
    firstName: "Gourab",
    lastName: "Sarkar",
    age: 23
};
var gourab_clone = gourab;

gourab.age = 46;

console.log(gourab.age);
console.log(gourab_clone.age);

gourab_clone.age = 24;
console.log(gourab.age);
console.log(gourab_clone.age);

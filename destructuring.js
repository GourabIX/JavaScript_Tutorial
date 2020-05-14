// ES5
var name = ["Gourab", "Sarkar"];
var firstName1 = name[0];
var lastName = name[1];
console.log(firstName1, lastName);

// ES6
// In ES6 destructuring has been made simple.

const [fname, lname] = ["Badal", "Sarkar"];
console.log(fname);
console.log(lname);

const person = {
    firstName: "Gourab",
    age: 23
};

const { firstName, age } = person;          // keys inside {} must be exactly same as object properties.
console.log(firstName);
console.log(age);

const { firstName: fname6, age: age6 } = person;              // For object destructuring, we have to use {} (curly braces).
console.log(fname6);
console.log(age6);

function calculateRetirementAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return [age, 65 - age];
}

let [age66, retirement66] = calculateRetirementAge(1996);
console.log(age66);
console.log(retirement66);
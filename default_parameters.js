// ES5

function SarkarPerson(firstName, yearOfBirth, lastName, nationality) {
  // workaround to default parameters in ES5
  lastName === undefined ? (lastName = "Sarkar") : lastName;
  nationality === undefined ? (nationality = "Indian") : nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var gourab = new SarkarPerson("Gourab", 1996);
console.log(gourab);

var jane = new SarkarPerson("Jane", 1995, "Smith", "American");
console.log(jane);

// In ES6, we can specify default values for function params while specifying
// the function parameters themselves.

function SarkarPerson6(
  firstName,
  yearOfBirth,
  lastName = "Sarkar",          // default param
  nationality = "Indian"        // default param
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

let gourab6 = new SarkarPerson6("Gourab", 1999);
console.log(gourab6);

let jane6 = new SarkarPerson6("Jane", 1998, "Smith", "American");
console.log(jane6);

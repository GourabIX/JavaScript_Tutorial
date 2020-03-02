var Person = function(firstName, job, yearOfBirth) {
    this.firstName = firstName;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
};

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = "Sarkar";

var gourab = new Person("Gourab", "Software Developer", 1996);
var badal = new Person("Badal", "Awesome Person 1", 1990);
var rita = new Person("Rita", "Awesome Person 2", 1991);

console.log(gourab);
console.log(badal);
console.log(rita);

console.log(gourab.lastName);
console.log(rita.lastName);
console.log(badal.lastName);

gourab.calculateAge();
rita.calculateAge();
badal.calculateAge();
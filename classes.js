// ES5

function Person5(firstName, yearOfBirth, job) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.yearOfBirth;
};

var gourab = new Person5("Gourab", 1996, "Software Developer");
console.log(gourab.calculateAge());

// ES6

class Person6 {
  constructor(firstName, yearOfBirth, job) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  static greeting() {
    console.log(
      "These methods are not inherited by class instances (objects). They are attached to their parent class only."
    );
  }
}

const gourab6 = new Person6("Gourab", 1996, "Software Developer");
console.log(gourab6.calculateAge());
Person6.greeting();

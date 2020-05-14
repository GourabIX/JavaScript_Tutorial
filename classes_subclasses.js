// Told simply, ES5 sucks.

// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.yearOfBirth;
};

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype); // connect the two function constructors.
// Doing the above step is necessary because this sets up the proper inheritance chain:
// Athlete5 -> Person5 -> Object

// Below function must be after the proper inheritance chain has been set up.
Athlete5.prototype.wonNewMedal = function () {
  this.medals++;
  console.log(this.medals);
};

var gourabAthlete = new Athlete5("Gourab Sarkar", 1996, "Archer", 4, 3);
console.log(gourabAthlete.calculateAge());
gourabAthlete.wonNewMedal();

// ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonNewMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const gourabAthlete6 = new Athlete6("Gourab Sarkar", 1996, "Archer", 7, 19);
console.log(gourabAthlete6.calculateAge());
gourabAthlete6.wonNewMedal();

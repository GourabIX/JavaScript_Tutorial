var gourab = {
  name: "Gourab",
  age: 23,
  job: "Full Stack Developer",
  presentation: function(style, timeOfDay) {
    if (style === "casual") {
      console.log(`Name's ${this.name}. And the time's ${timeOfDay}.`);
    } else if (style === "formal") {
      console.log(
        `Hi! My name is ${this.name} and the time of day is ${timeOfDay}.`
      );
    } else {
      console.log("Salut, Soldier!");
    }
  }
};

var mrinmoy = {
  name: "Mrinmoy",
  age: 24,
  job: "Graphics Designer"
};

gourab.presentation("casual", "afternoon");
gourab.presentation("formal", "morning");

gourab.presentation.call(mrinmoy, "casual", "afternoon");
gourab.presentation.call(mrinmoy, "formal", "morning");

var gourabCasual = gourab.presentation.bind(gourab, "casual");
gourabCasual("morning");
gourabCasual("evening");

var gourabFormal = gourab.presentation.bind(gourab, "formal");
gourabFormal("noon");

var mrinmoyCasual = gourab.presentation.bind(mrinmoy, "casual");
mrinmoyCasual("afternoon");

var mrinmoyHeavy = gourab.presentation.bind(mrinmoy, "heavy");
mrinmoyHeavy("morning");

// Another example for bind using something similar to code in first_class_functions.js

var years = [2002, 1996, 1995, 1999, 1992, 2007, 1994, 2015];

function arrayCalc(array, fn) {
  var arrayRes = [];
  for (var i = 0; i < array.length; i++) {
    arrayRes.push(fn(array[i]));
  }
  return arrayRes;
}

function calculateAge(yearOfBirth) {
  return 2020 - yearOfBirth;
}

function isAdult(adultAge, age) {
  return age >= adultAge;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var adultPeopleIN = arrayCalc(ages, isAdult.bind(this, 18));
console.log(adultPeopleIN);

var adultPeopleJP = arrayCalc(ages, isAdult.bind(this, 20));
console.log(adultPeopleJP);

var adultPeopleUK = arrayCalc(ages, isAdult.bind(this, 16));
console.log(adultPeopleUK);

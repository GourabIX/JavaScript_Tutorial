// First Class functions :: Pass functions as Function arguments

function arrayCalculator(array, func) {
  var arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    arrayResult.push(func(array[i]));
  }
  return arrayResult;
}

function ageCalculator(yearOfBirth) {
  return 2020 - yearOfBirth;
}

function isFullAge(age) {
  if (age >= 18) return true;
  return false;
}

function maxHeartRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - 0.67 * age);
  } else {
    return -1;
  }
}

var yearsOfBirth = [1996, 1997, 2001, 1984, 1966, 1959, 1965, 2012];

var ageArray = arrayCalculator(yearsOfBirth, ageCalculator);
console.log(ageArray);

var fullAgeArray = arrayCalculator(ageArray, isFullAge);
console.log(fullAgeArray);

var heartRateArray = arrayCalculator(ageArray, maxHeartRate);
console.log(heartRateArray);

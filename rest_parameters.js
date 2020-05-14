// In ES6, rest parameters are an arbitrary number of parameters, denoted by
// 3 dots (...) - which is the same symbol as spread operator. In this case
// however, using the rest parameters with the spread operator notation in a
// function definition will cause the arguments to be auto-admitted in a nice
// array so that Array methods are applicable on the array which has the same name
// as the function parameter.

// The major difference between rest parameters and spread operators is that
// the spread operator is used to expand an array / DS in a function call into
// individual elements. Rest parameters are used to compact individual
// arbitrary number of params into an array inside of a function definition.

// ES5

function checkFullAge() {
  var yearArgs = Array.prototype.slice.call(arguments);
  yearArgs.forEach(function (current) {
    console.log(new Date().getFullYear() - current >= 18);
  });
}

checkFullAge(1990, 1987, 1976, 1966, 1959, 2003, 2009);
console.log("-----------------------------------------");

// ES6

function checkFullAge6(...years) {
  years.forEach((current) =>
    console.log(new Date().getFullYear() - current >= 18)
  );
}

checkFullAge6(2004, 1996, 2005, 1990, 1977, 1976);
console.log("-----------------------------------------");

// ES5

function checkFullAge5(adultLimit) {
  var yearArgs = Array.prototype.slice.call(arguments, 1); // starts from index 1.
  yearArgs.forEach(function (current) {
    console.log(new Date().getFullYear() - current >= adultLimit);
  });
}

checkFullAge5(21, 1996, 1997, 2009, 2000);
console.log("-----------------------------------------");

// ES6

function checkFullAge66(adultLimit, ...years) {
  years.forEach((current) =>
    console.log(new Date().getFullYear() - current >= adultLimit)
  );
}

checkFullAge66(21, 1996, 1997, 2009, 2000);
console.log("-----------------------------------------");

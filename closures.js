// Closure means that an inner function always has access to the vars and parameters
// of its outer function, even after the outer function has returned.

function retirement(retirementAge) {
  var suffixString = " years more to go!";
  return function(yearOfBirth) {
    var age = new Date().getFullYear() - yearOfBirth;
    console.log(retirementAge - age + suffixString);
  };
}

var retirementIN = retirement(60);
retirementIN(1996);

var retirementUS = retirement(65);
retirementUS(1996);

var retirementJP = retirement(66);
retirementJP(1996);

// In the above example, the `suffixString` variable is still available even after
// the function printing the remaining years to retirement returns to the function caller.
// This is an example of a closure, where an inner function has access to the vars and
// parameters of its outer function even after the outer function has returned.

function interviewQuestions(job) {
  return function(name) {
    if (job === "Software Developer") {
      console.log(`What technologies are you familiar with, ${name}?`);
    } else if (job === "Full Stack Developer") {
      console.log(
        `Can you tell me about any full stack projects you have done, ${name}?`
      );
    } else {
      console.log(`Interesting! Tell me more about what you do, ${name}.`);
    }
  };
}

interviewQuestions("Full Stack Developer")("Gourab");
interviewQuestions("VFX Designer")("Mrinmoy");

// In this example, because of closures, the anonymous function still has access to the 
// `job` parameter even after the inner anonymous function has returned.

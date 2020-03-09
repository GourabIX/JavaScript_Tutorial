// IIFE stands for Immediately Invoked Function Expressions
// These are mainly used for data privacy to create a separate (private) scope inside of the global scope.

(function() {
    var score = Math.round(Math.random() * 10);
    console.log("Rounded score: " + score);
})();

(function(name) {
    var score = Math.random() * 10;             // returns random numbers from 0 to 9.
    console.log(name + "'s score: " + score);
})("Gourab");           // argument: name is supplied here.
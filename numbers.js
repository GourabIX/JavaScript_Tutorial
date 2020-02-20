"use strict";

// --- CALCULATE SUM

let num1 = +prompt("What's the first number?", 0);
let num2 = +prompt("What's the second number?", 0);

alert(num1 + num2);

// --- REPEAT UNTIL INPUT IS A NUMBER

function readNumber() {
    let userIn;

    do {
        userIn = prompt("Enter a number: ");
    } while( !isFinite(userIn) )

    if(userIn === null || userIn == "")
        return null;
    
    return +userIn;
}

console.log(readNumber());

// --- RANDOM NUMBERS WITHIN A RANGE

function random(min, max) {
    return min + Math.random() * (max - min);
}

// In case of random integer generation, we need to add proper edge values to both end limits.
// This is required because with Math.round, the randomness of the numbers generated is severely
// decreased. To ensure uniform distribution across generated values, we add 0.5 to either end limit.

// Ideally, the limits should be: MIN - 0.5 and MAX + 0.5

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max + 0.5 - min + 0.5));
}

alert( random(2, 7) );
alert( random(2, 7) );
alert( random(2, 7) );
alert( random(2, 7) );

alert( randomInteger(3, 9) );
alert( randomInteger(3, 9) );
alert( randomInteger(3, 9) );
alert( randomInteger(3, 9) );
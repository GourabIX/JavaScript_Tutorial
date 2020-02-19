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
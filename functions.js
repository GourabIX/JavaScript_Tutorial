let userAge = +prompt("What's your age?");

function checkAge(age) {
    return (age > 18) ? true : confirm("Did your parents allow you?");
}

function checkAgeOnceAgain(age) {
    return (age > 18) || confirm("Did you get your parents' approval?");
}

alert(checkAge(userAge));
alert(checkAgeOnceAgain(userAge));

// ---

function getMinimum(num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

function getMinimumOfThree(num1, num2, num3) {
    return (num1 < num2) ? ((num1 < num3) ? num1 : num3) : ((num2 < num3) ? num2 : num3);
}

let n1 = +prompt("Enter the first number: ");
let n2 = +prompt("Enter the second number: ");
let n3 = +prompt("Enter the third number: ");
alert(getMinimum(n1, n2));
alert(getMinimumOfThree(n1, n2, n3));

// ---

let x = +prompt("Enter the value of x: ");
let n = +prompt("Enter the value of n: ");

function getPoweredValue(num, power) {
    return num ** power;                                // ** is the exponent operator
}

alert(getPoweredValue(x, n));
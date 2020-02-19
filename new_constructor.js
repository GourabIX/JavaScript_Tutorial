"use strict";

// Two objects created by different constructors can only be equal when the constructors
// return the same object reference.

let myObj = {};

function Caller1() {        // constructor -- starting letter is Capital :: name can be arbitrary
    return myObj;
}

function Caller2() {
    return myObj;
}

alert(`Are objects equal? ${ new Caller1() === new Caller2() }`);

// --- Design a Calculator which works using Constructor

function Calculator() {
    this.readNumbers = function() {
        this.num1 = +prompt("Enter the first number: ", 0);
        this.num2 = +prompt("Enter the second number: ", 0);
    }

    this.getSum = function() {
        return this.num1 + this.num2;
    }

    this.getProduct = function() {
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator();
calculator.readNumbers();
alert( calculator.getSum() );
alert( calculator.getProduct() );

// --- Design an Accumulator which works using a Constructor

function Accumulator(startingValue) {
    this.value = startingValue;

    this.readNumber = function() {
        this.value = this.value + +prompt("Add something?", 0);
        return this.value;
    }
}

let accumulator = new Accumulator( +prompt("Where should we start at?", 0) );
accumulator.readNumber();
accumulator.readNumber();
alert( accumulator.value );
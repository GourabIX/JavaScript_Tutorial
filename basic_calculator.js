"use strict";

let calculator = {
    num1: 0,
    num2: 0,
    
    readValue() {
        this.num1 = +prompt("Enter the first number: ", 0);
        this.num2 = +prompt("Enter the second number: ", 0);
    },

    getSum() {
        return this.num1 + this.num2;
    },

    getProduct() {
        return this.num1 * this.num2;
    },

    getDifference() {
        return this.num1 - this.num2;
    },

    getQuotient() {
        return this.num1 / this.num2;
    },

    getExponentiation() {
        return this.num1 ** this.num2;
    }
};

calculator.readValue();
alert( calculator.getSum() );
alert( calculator.getDifference() );
alert( calculator.getProduct() );
alert( calculator.getQuotient() );
alert( calculator.getExponentiation() );
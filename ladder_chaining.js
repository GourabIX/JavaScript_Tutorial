"use strict";

let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;            // For calls chaining, we return the whole object with every call
    },

    down() {
        this.step--;
        return this;
    },

    showStep() {
        alert( this.step );
        return this;
    }
}

ladder.up().up().up().up().down().down().showStep().down().showStep();          // chained calls.
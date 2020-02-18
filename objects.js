"use strict";

let user = {};
user.firstname = "Gourab";
user.surname = "Sarkar";
console.log(user);

user.firstname = "Somu";
console.log(user);

delete user.firstname;
console.log(user);

// CHECK FOR OBJECT EMPTINESS

function isEmpty(object) {
    for (let key in object) {
        // if the loop has started, that means there's a key and the object is NOT empty.
        return false;
    }

    return true;
}

let schedule = {};
alert(isEmpty(schedule));

schedule["8:30"] = "wake up";
alert(isEmpty(schedule));
console.log(schedule);

// GET SUM OF ALL SALARIES

function calculateTotalSalary(salaries) {
    let sum = 0;
    for (let person in salaries) {
        sum += salaries[person];
    }
    return sum;
}

let wages = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let emptyWages = {};

alert(`Total Salary: ${calculateTotalSalary(wages)}`);
alert(`Ghost company salary: ${calculateTotalSalary(emptyWages)}`);

// MULTIPLY NUMERIC PROPERTIES BY 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function doubleNumbers(menu) {
    for (let key in menu) {
        if (typeof (menu[key]) == "number")
            menu[key] *= 2;
    }
}

console.log(menu);
doubleNumbers(menu);
console.log(menu);

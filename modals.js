// an alert shows a modal with a single button: OK. User interaction with the rest of the web page is restricted
// until the alert modal is dismissed.

alert("Hello There!");

// a prompt shows a modal with some text and input field for the user to enter some text. If pressed OK, the
// input value is returned. If cancel is clicked, null is returned.

let myAge = prompt("Enter your age: ", 0);              // prompt("Text to display", default value)
console.log(myAge);

// a confirm modal shows some text with 2 buttons: OK and cancel. OK returns true; cancel returns false.

let myName = prompt("What is your name?");
let myStatus = confirm("Are you a cyborg?");
if (myStatus)
    alert(`${myName} is a cyborg!`);
else
    alert(`${myName} is a stupid human.`);
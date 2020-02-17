let officialName = prompt("What is the official name of JavaScript?");
if (officialName === "ECMAScript")
    alert("Right!");
else
    alert("It's ECMAScript, buddhu!");


// ---

let myNumber = prompt("Enter your favorite number: ", 9);
if (myNumber > 0)
    console.log("Number is greater than 0.");
else if (myNumber == 0)
    console.log("Number is equal to 0.");
else
    console.log("Number is less than 0.");

// ---

let a = 7;
let b = 9;
let result = (a + b) > 10 ? "Greater than 10" : "Lesser than 10";
alert(result);

// ---

let login = prompt("What's your designation?");
alert((login === "Employee") ? "Hello, Employee!" :
    (login === "Director") ? "Hello Director!" :
        (login === "CEO") ? "Hello CEO!" : "GTFO!");

// ---

let myAge = prompt("What's your age?");
if (myAge >= 14 && myAge <= 90) {
    alert("You'll fit right in!");
}
else if (!(myAge >= 14 && myAge <= 90)) {
    alert("Uhh... Sorry but maybe this is not the right place for you.");
}

// ---

let user = prompt("Who's there?");
if (user === "Baap") {
    let user_auth = prompt("Enter your password: ");
    if (user_auth === "TheMaster")
        alert("Welcome, mere Baap!");
    else if (user_auth == null)
        alert("Baap Login cancelled.");
    else
        alert("Wrong password.");
} else if (user == null) {
    alert("User Login cancelled");
} else {
    alert("I don't know you. GTFO.");
}

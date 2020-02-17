for(let i = 0; i < 10; i++) {
    (i % 2 === 0) ? console.log(i) : "";                // using an empty string to do nothing. can't use continue here.
}

for (let i = 2; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}

// ---

let i = 0;
while(i < 3) {
    alert(`number ${i}!`);
    i++;
}

// ---

let userNumber = 0;
do {
    userNumber = prompt("Enter a number greater than 100: ");
} while(userNumber < 100 && userNumber);

// ---

let upperlimit = prompt("Enter the upper limit up to which to find prime numbers: ");
primeLoop:
for (let i = 2; i <= upperlimit; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0)
            continue primeLoop;                 // we can also use break labelName whereever required.
    }
    alert(`Prime: ${i}`);
}

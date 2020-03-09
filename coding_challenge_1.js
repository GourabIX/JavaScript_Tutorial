var johnMass, markMass, johnHeight, markHeight, johnBmi, markBmi, isMarkBmiGreater;

johnMass = +prompt("Enter John's mass: ");
markMass = +prompt("Enter Mark's mass: ");
johnHeight = +prompt("Enter John's Height: ");
markHeight = +prompt("Enter Mark's Height: ");

johnBmi = johnMass / Math.pow(johnHeight, 2);
markBmi = markMass / Math.pow(markHeight, 2);
isMarkBmiGreater = markBmi > johnBmi;

console.log("Mark's BMI: " + markBmi + " and John's BMI: " + johnBmi);          // numbers are being converted to strings ::
                                                                                // :: process is known as type coercion.
console.log("Is Mark's BMI higher than John's BMI?", isMarkBmiGreater);

// An alternative way

if (markBmi < johnBmi) {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi}). `);
} else {
    console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}). `);
}
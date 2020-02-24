/*****************************
* CODING CHALLENGE 4
****************************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

var gourab = {
    fullName: "Gourab Sarkar",
    mass: 63,
    height: 1.52,
    calculateBMI: function() {
        return this.bmi = this.mass / Math.pow(this.height, 2);
    }
}

var sushma = {
    fullName: "Sushma Punjabi",
    mass: 68,
    height: 1.51,
    calculateBMI: function() {
        return this.bmi = this.mass / Math.pow(this.height, 2);
    }
}

console.log(gourab);
console.log(sushma);

if (gourab.calculateBMI() > sushma.calculateBMI()) {       // call the methods only once
                                                           // the property 'bmi' is already set
                                                           // directly use the 'bmi' property
    console.log(`Gourab has a higher BMI of ${gourab.bmi}.`);
} else if (gourab.bmi < sushma.bmi) {
    console.log(`Sushma has a higher BMI of ${sushma.bmi}.`);
} else {
    console.log(`Both Gourab & Sushma have equal BMI of ${gourab.bmi}.`);
}
/*****************************
 * CODING CHALLENGE 5
 ****************************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var johnExpenses = {
  fullname: "John Ka-boom",
  tipAmounts: [],
  paymentsDue: [],
  billAmounts: [124, 48, 268, 180, 42],
  tipCalculator: function() {
    for (i = 0; i < this.billAmounts.length; i++) {
      if (this.billAmounts[i] < 50)
        this.tipAmounts.push(0.2 * this.billAmounts[i]);
      else if (this.billAmounts[i] >= 50 && this.billAmounts[i] <= 200)
        this.tipAmounts.push(0.15 * this.billAmounts[i]);
      else this.tipAmounts.push(0.1 * this.billAmounts[i]);
    }
  },
  paymentsCalculator: function() {
    for (i = 0; i < this.billAmounts.length; i++) {
      this.paymentsDue.push(this.billAmounts[i] + this.tipAmounts[i]);
    }
  }
};

johnExpenses.tipCalculator();
johnExpenses.paymentsCalculator();
console.log(johnExpenses);
console.log(johnExpenses.paymentsDue);

var markExpenses = {
  fullname: "Mark Yakuza",
  tipAmounts: [],
  paymentsDue: [],
  billAmounts: [77, 375, 110, 45],
  tipCalculator: function() {
    for (i = 0; i < this.billAmounts.length; i++) {
      if (this.billAmounts[i] < 100)
        this.tipAmounts.push(0.2 * this.billAmounts[i]);
      else if (this.billAmounts[i] >= 100 && this.billAmounts[i] <= 300)
        this.tipAmounts.push(0.1 * this.billAmounts[i]);
      else this.tipAmounts.push(0.25 * this.billAmounts[i]);
    }
  },
  paymentsCalculator: function() {
    for (i = 0; i < this.billAmounts.length; i++) {
      this.paymentsDue.push(this.billAmounts[i] + this.tipAmounts[i]);
    }
  }
};

markExpenses.tipCalculator();
markExpenses.paymentsCalculator();
console.log(markExpenses);
console.log(markExpenses.paymentsDue);

function tipsAverage(tipAmounts) {
  sumTips = 0;
  for (let i = 0; i < tipAmounts.length; i++) {
    sumTips += tipAmounts[i];
  }
  return sumTips / tipAmounts.length;
}

tipsAverage(johnExpenses.tipAmounts) > tipsAverage(markExpenses.tipAmounts)
  ? console.log("John's tipping average is higher.")
  : console.log("Mark's tipping average is higher.");

tipsAverage(johnExpenses.tipAmounts) > tipsAverage(markExpenses.tipAmounts)
  ? console.log(johnExpenses.tipAmounts)
  : console.log(markExpenses.tipAmounts);

johnExpenses.averageTip = tipsAverage(johnExpenses.tipAmounts);
markExpenses.averageTip = tipsAverage(markExpenses.tipAmounts);

console.log(johnExpenses);
console.log(markExpenses);
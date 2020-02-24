/*****************************
 * CODING CHALLENGE 3
 ****************************/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/

function tipCalculator(billAmount) {
  if (billAmount < 50) {
    return 0.2 * billAmount;
  } else if (billAmount >= 50 && billAmount <= 200) {
    return 0.15 * billAmount;
  } else {
    return 0.1 * billAmount;
  }
}

function paymentCalculator(billAmount, tipAmount) {
  return billAmount + tipAmount;
}

var billAmounts = [124, 48, 268, 300];
var tipAmounts = [];
var paymentsDue = [];

for (i = 0; i < billAmounts.length; i++) {
    tipAmounts.push(tipCalculator(billAmounts[i]));
}

for (i = 0; i < billAmounts.length; i++) {
    paymentsDue.push(paymentCalculator(billAmounts[i], tipAmounts[i]));
}

console.log(tipAmounts);
console.log(paymentsDue);
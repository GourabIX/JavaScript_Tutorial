// In ES6 there's a new operator called the spread operator which allows to
// easily 'expand' data structures such as arrays to their individual elements.

// The spread operator is written as "..."

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

let nums = [12, 24, 47, 78];
console.log(
  `The sum total of ${nums[0]}, ${nums[1]}, ${nums[2]} and ${
    nums[3]
  } is ${addNumbers(...nums)}.`
);

const friends = ["Gourab", "Mrinmoy", "Suphal", "Atanu"];
console.log(...friends);

const potterFamily = ["Harry Potter", "James Potter", "Lily Potter"];
const weasleyFamily = [
  "Ron Weasley",
  "Ginny Weasley",
  "Arthur Weasley",
  "Molly Weasley",
];
const bigHappyFamily = [
  ...potterFamily,
  "Albus Severus Potter",
  "Hugo Weasley",
  "Rose Weasley",
  ...weasleyFamily,
];
console.log(bigHappyFamily);

/* 
In ES6, we have a new DS called a map. They are extremely useful for the following reasons:
1. Maps are iterable with loops such as forEach and for-of. Objects are not iterable.
2. We can get the size of a map by using the map.size property.
3. We can use primitive types such as strings, numbers and boolean types as keys in a map.
   Also objects and functions are permissible as keys in a map DS.
*/

const question = new Map(); // creates an empty Map DS
question.set(
  "question",
  "What is the official name of the current JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES2016");
question.set("correct", 3);
question.set(true, "Congrats! Correct answer.");
question.set(false, "Whoops! Wrong answer.");

console.log(`Size of the map is: ${question.size}.`);

console.log(question.get("question"));
question.forEach((currentValue, currentKey) => {
  if (typeof currentKey === "number") {
    console.log(`${currentKey}: ${currentValue}`);
  }
});

/*
The answer gallery has an alternative way too: a for-of loop.
*/
for (const [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Option ${key}: ${value}`);
  }
}

const userAnswer = parseInt(prompt("What's your answer?"));
console.log(
  `You have chosen option ${userAnswer}: ${question.get(userAnswer)}.`
);
console.log(question.get(userAnswer === question.get("correct")));

if (question.has("correct")) console.log("Question has an answer available.");
if (question.has(4)) question.delete(4);

console.log("Clearing the question...");
question.clear();

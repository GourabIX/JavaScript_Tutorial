/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

//
//////////////////////////////

// SOLUTION STARTS HERE >>>
/////////////////////////////

// Using IIFEs to create a private scope inside of the global scope
(function () {
  function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  let userScore = 0;

  // Having a function inside of the object prototype will execute the "method" when the object is being created.
  Question.prototype.displayQuestionAnswer = function () {
    console.log("------------------------------------------------");
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (answer) {
    answer = parseInt(answer);
    if (answer > this.answers.length - 1)
      console.log("Your answer did not match available options.");
    else console.log("Your answer is: " + this.answers[answer]);

    if (this.correctAnswer === answer) {
      console.log("Great Job! Correct answer.");
      userScore = userScore + 1;
    } else {
      console.log("Whoops! Wrong answer.");
    }
  };

  let q1 = new Question(
    "What is the best programming language in the world?",
    ["Java", "C/C++", "Python"],
    0
  );
  let q2 = new Question(
    "Is JavaScript the coolest scripting language in this world?",
    ["Yes", "No"],
    1
  );
  let q3 = new Question("Does JavaScript suck?", ["Yes", "No"], 0);
  let q4 = new Question(
    "Did you ever fall in Love?",
    ["Yes", "No", "It's complicated"],
    0
  );
  let q5 = new Question(
    "Do you think you'll ever be able to love again?",
    ["Nope", "Never again", "I'm scared"],
    2
  );

  let questionBank = [q1, q2, q3, q4, q5];

  function progressGame() {
    let chosenQuestionToDisplay = Math.floor(
      Math.random() * questionBank.length
    );
    questionBank[chosenQuestionToDisplay].displayQuestionAnswer();
    let userAnswer = prompt(
      "Enter the answer's option number or type 'exit' to quit: "
    );
    if (userAnswer !== "exit") {
      questionBank[chosenQuestionToDisplay].checkAnswer(userAnswer);
      console.log("Here comes the next question!");
      displayUserScore();
      progressGame();
    } else {
      displayUserScore();
      console.log("Goodbye! Hope you had a good game.");
    }
  }

  function displayUserScore() {
    console.log("Your current score is: " + userScore);
  }

  progressGame();
})();

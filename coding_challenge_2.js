/*****************************
 * CODING CHALLENGE 2
 *****************************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function getWinningTeam(avgScore1, avgScore2) {
  if (avgScore1 > avgScore2) {
    alert(`Team 1 has the highest average score! ${Math.round(avgScore1)}`);
  } else if (avgScore1 < avgScore2) {
    alert(`Team 2 has the highest average score! ${Math.round(avgScore2)}`);
  } else {
    alert(
      `There's a tie between Team 1 (${Math.round(
        avgScore1
      )}) and Team 2 (${Math.round(avgScore2)}).`
    );
  }
}

function getWinningTeamExtra(avgScore1, avgScore2, avgScore3) {
  if (avgScore1 > avgScore2) {
    if (avgScore1 > avgScore3) {
      alert(`Team 1 has the highest average (${Math.round(avgScore1)})`);
    } else if (avgScore1 < avgScore3) {
      alert(`Team 3 has the highest average (${Math.round(avgScore3)})`);
    } else {
      alert(
        `There's a tie for the highest average scores between Team 1 (${Math.round(
          avgScore1
        )}) and Team 3 (${Math.round(avgScore3)})`
      );
    }
  } else if (avgScore1 < avgScore2) {
    if (avgScore2 > avgScore3) {
      alert(`Team 2 has the highest average (${Math.round(avgScore2)})`);
    } else if (avgScore2 < avgScore3) {
      alert(`Team 3 has the highest average (${Math.round(avgScore3)})`);
    } else {
      alert(
        `There's a tie for the highest average scores between Team 2 (${Math.round(
          avgScore2
        )}) and Team 3 (${Math.round(avgScore3)}).`
      );
    }
  } else {
    if (avgScore1 < avgScore3) {
      alert(`Team 3 has the highest average (${Math.round(avgScore3)})`);
    } else if (avgScore1 > avgScore3) {
      alert(
        `Both Team 1 and Team 2 have a tie and the highest average (${Math.round(
          avgScore1
        )})`
      );
    } else {
      alert(
        `All the Teams are tied with each other with the highest average (${Math.round(
          avgScore1
        )})`
      );
    }
  }
}

var team1Average, team2Average, team3Average;
team1Average = calculateAverage(110, 120, 103);
team2Average = calculateAverage(116, 94, 123);
team3Average = calculateAverage(94, 134, 105);

console.log(team1Average);
console.log(team2Average);
console.log(team3Average);

getWinningTeam(team1Average, team2Average);
getWinningTeamExtra(team1Average, team2Average, team3Average);

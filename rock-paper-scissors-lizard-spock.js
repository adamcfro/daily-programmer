/**
 * This function takes a user input and compares it to a randomly generated
 * computer input, and determines the winner of Rock, Paper, Scissors,
 * Lizard, Spock. Rules:
 *   rock beats scissors
 *   scissors beats paper
 *   paper beats rock
 *   spock beats scissors and rock and loses to lizard and paper
 *   lizard beats spock and paper and loses to rock and scissors
 * 
 * @returns {String} - Returns a string displaying the winner
 */
function rps () {
  let results = '';
  let choices = ['', 'rock', 'paper', 'scissors', 'lizard', 'Spock'];
  let userInput = prompt(`Enter number for choice:
  1) Rock
  2) Paper
  3) Scissors
  4) Lizard
  5) Spock`);
  let computerInput = Math.floor(Math.random() * 5) + 1;
  // Same choice is made
  if (choices[userInput] === choices[computerInput]) {
    results = 'Tie!';
  // Player chooses rock
  } else if (userInput === 1) {
    if (computerInput === 2 || computerInput === 5) {
      results = 'Computer Wins!';
    } else {
      results = 'Player Wins!';
    }
  // Player chooses paper
   } else if (userInput === 2) {
    if (computerInput === 3 || computerInput === 4) {
      results = 'Computer Wins!';
    } else {
      results = 'Player Wins!';
    }
  // Player chooses scissors
  } else if (userInput === 3) {
    if (computerInput === 1 || computerInput === 5) {
      results = 'Computer Wins!';
    } else {
      results = 'Player Wins!';
    }
  // Player chooses lizard
  } else if (userInput === 4) {
    if (computerInput === 2 || computerInput === 5) {
      results = 'Computer Wins!';
    } else {
      results = 'Player wins!';
    }
  // Player chooses spock
  } else {
    if (computerInput === 2 || computerInput === 4) {
      results = 'Computer Wins!';
    } else {
      results = 'Player Wins!';
    }
  }
  return `Player chose ${choices[userInput]}, Computer chose ${choices[computerInput]}: ${results}`;
}
/**
 * This function takes a user input and compares it to a computer input, and 
 * determines the winner of Rock, Paper, Scissors, Lizard, Spock. Rules:
 *   rock beats scissors,
 *   scissors beats paper,
 *   paper beats rock,
 *   spock beats scissors and rock and loses to lizard and paper,
 *   lizard beats spock and paper and loses to rock and scissors.
 * 
 * @returns {String} - Returns a string displaying the winner
 */
function rps (userInput, computerInput) {
  let results = '';
  let choices = ['', 'rock', 'paper', 'scissors', 'lizard', 'Spock'];
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
  // Player chooses Spock
  } else if (userInput === 5) {
    if (computerInput === 2 || computerInput === 4) {
      results = 'Computer Wins!';
    } else {
      results = 'Player Wins!';
    }
  }
  return `Player chose ${choices[userInput]}, Computer chose ${choices[computerInput]}: ${results}`;
}
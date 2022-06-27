/**
 * This function asks a user for a number between 1 and 100 and tells the user
 * whether or not their guess was too high or too low until the user inputs
 * the correct answer. Returns a string telling the user when their answer
 * is correct.
 * 
 * @returns {String} - Returns a string
 */
function guessThatNumber () {
  let correctNumber = Math.floor(Math.random() * 100) + 1;
  let userGuess = Number(prompt("Guess a number between 1 and 100: "));
  while (userGuess !== correctNumber) {
    if (userGuess > correctNumber) {
      userGuess = Number(prompt("Wrong! Guess a lower number."));
    } else {
      userGuess = Number(prompt("Wrong! Guess a higher number."));
    }
  }
  return `Correct! The number was ${correctNumber}.`;
}
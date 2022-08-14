/**
 * This function asks a user for a series of letters or numbers and returns
 * a sorted array of the user's input.
 * 
 * ONLY WORKS WITH NUMBERS LESS THAN 10.
 * 
 * @returns {Array} - Returns a sorted array
 */
function userInputSort () {
  let userInput = prompt('Enter numbers or letters separated by a space: ');
  userInput = userInput.split(' ');
  let finished = false;
  while (!finished) {
    finished = true;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i - 1] > userInput[i]) {
        finished = false;
        let temp = userInput[i - 1];
        userInput[i - 1] = userInput[i];
        userInput[i] = temp;
      }
    }
  }
  return userInput;
}
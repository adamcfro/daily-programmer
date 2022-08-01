/**
 * This program is used to keep track of the scores of a game. It takes a string 
 * as input and assigns each player a letter to be used for scorekeeping. 
 * The program loops through the string and for each letter, adds 1 to a players 
 * count if the letter is lowercase, or subtracts 1 point if the letter 
 * is uppercase.
 * Returns the sorted scores of a game. 
 * 
 * @param {string} str - A string of letters
 * @returns {string} - Returns a string of sorted scores
 */
function tallyProgram (str) {
  let scores = {};
  for (let i = 0; i < str.length; i++) {
    // add or subtract from value if the key already exists
    if (str[i].toLowerCase() in scores) {
      if (str[i] in scores) {
        scores[str[i]] += 1;
      } else {
        scores[str[i].toLowerCase()] -= 1;
      }
    // create a key if no key exists
    } else {
      if (str[i] === str[i].toLowerCase()) {
        scores[str[i]] = 1;
      } else {
        scores[str[i].toLowerCase()] = -1;
      }
    }
  }
  // convert object to string for display
  let returnObject = JSON.stringify(scores);
  return returnObject.replace(/[{}]/g, '');
}
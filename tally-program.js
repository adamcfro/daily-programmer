/**
 * This program is used to keep track of the scores of a game. It takes a string 
 * as input and assigns each player a letter to be used for scorekeeping. 
 * The program loops through the string and for each letter, adds 1 to a players 
 * count if the letter is lowercase, or subtracts 1 point if the letter 
 * is uppercase.
 * Returns the sorted scores of a game. 
 * 
 * @param {String} str - A string of letters
 * @returns {String} - Returns a string of sorted scores
 */
function tallyProgram (str) {
  let scores = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() in scores) {
      if (str[i] in scores) {
        scores[str[i]] += 1;
      } else {
        scores[str[i].toLowerCase()] -= 1;
      }
    } else {
      if (str[i] === str[i].toLowerCase()) {
        scores[str[i]] = 1;
      } else {
        scores[str[i].toLowerCase()] = -1;
      }
    }
  }
  let returnObject = JSON.stringify(scores);
  return returnObject.replace(/[{}]/g, '');
}
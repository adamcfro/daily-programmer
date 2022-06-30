/**
 * This function takes in a string as input and returns a new string with any
 * '*' characters removed, along with any character to the right or left of
 * the '*' character.
 * 
 * @param {string} str - A string parameter
 * @returns {string} - Returns a new string
 */
function starDelete (str) {
  let indexes = [];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') {
      indexes.push(i - 1, i, i + 1);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (!indexes.includes(i)) {
      newStr += str[i];
    }
  }
  return newStr;
}
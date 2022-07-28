/**
 * This function takes in a string parameter and returns true if all brackets
 * are correctly paired and ordered.
 * 
 * @param {string} str - A string parameter
 * @returns {boolean} - Returns a boolean
 */
function bracketRacket (str) {
  let leftBrackets = ['(', '[', '{', '<'];
  let rightBrackets = [')', ']', '}', '>'];
  for (let i = 0; i < str.length; i++) {
    if (rightBrackets.includes(str[i])) {
      for (let j = i - 1; j >= 0; j--) {
        if (leftBrackets.includes(str[j])) {
          if (leftBrackets.indexOf(str[j]) === rightBrackets.indexOf(str[i])) {
            str = str.substring(0, j) + str.substring(j + 1, i) + str.substring(i + 1);
            i -= 2;
            break;
          } else {
            return false;
          }
        }
        if (j === 0) {
          return false;
        }
      }
    }
  }
  return true;
}
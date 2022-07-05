/**
 * This function takes in a string parameter and returns true if every
 * character in the string is a number character. Returns false otherwise.
 * 
 * @param {string} str - A string paramter
 * @returns {boolean} - Returns a boolean value
 */
function digitsCheck (str) {
  for (let i = 0; i < str.length; i++) {
    if (!(str[i].charCodeAt(0) > 47) || (!(str[i].charCodeAt(0) < 58))) {
      return false;
    }
  }
  return true;
}
/**
 * Given a string containing only lowercase letters, returns true if every
 * letter that appears in the string appears the same number of times
 * as the other characters in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function perfectlyBalanced (str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in charCount) {
      charCount[str[i]] += 1;
    } else {
      charCount[str[i]] = 1;
    }
  }
  let charValues = Object.values(charCount);
  let valueCheck = charValues[0];
  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] !== valueCheck) {
      return false;
    }
  }
  return true;
}
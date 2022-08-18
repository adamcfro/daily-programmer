/**
 * Returns the first recurring character in a string.
 * 
 * @param {string} str - A string parameter
 * @returns {string} - Returns a string character
 */
function firstRecurringCharacter (str) {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      return str[i];
    } else {
      chars.push(str[i]);
    }
  }
  return "No recurring characters."
}
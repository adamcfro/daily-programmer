/**
 * This function takes in a string parameter and a number parameter and returns
 * true if the string contains n or less unique characters.
 * 
 * @param {string} str - A string parameter
 * @param {number} n - A number of the most unique characters allowed
 * @returns {boolean} - Returns true if there are n or less unique characters
 */
function ncset (str, n) {
  let uniqueChars = new Set();
  for (let i = 0; i < str.length; i++) {
    uniqueChars.add(str[i]);
  }
  return uniqueChars.size <= n;
}
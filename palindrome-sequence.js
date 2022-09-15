/**
 * This function takes in a string as input and returns true if the string
 * is a palindrome, returns false otherwise.
 * 
 * @param {string} str - A string parameter
 * @returns {boolean} - Returns true if parameter is a palindrome
 */
function palindromeSequence (str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}
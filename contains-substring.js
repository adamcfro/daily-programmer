/**
 * This function takes in two strings and returns the starting index of the
 * substring if it exists, returns false otherwise.
 * 
 * @param {string} str1 - First string parameter
 * @param {string} str2 - Second string parameter
 * @returns {boolean|string} - Returns a boolean if false, an index otherwise
 */
function containsSubstring (str1, str2) {
  let subLength = str2.length;
  for (let i = 0; i < str1.length; i++) {
    if (str1.substring(i, i + subLength) === str2) {
      return i;
    }
  }
  return false;
}
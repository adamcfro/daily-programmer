/**
 * This function takes in a sequence of letters that make up a pattern of
 * equal letters that must be matched against a string parameter.
 * Returns true if it is possible.
 * 
 * Pattern:
 *  XXYY means that you have a word that contains a sequence of 2 of the
 *  same letters, followed by 2 different matching letters.
 * 
 * @param {String} pattern - A string pattern to match
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function patterns (pattern, str) {
  if (pattern === 'XXYY') {
    for (let i = 0; i < str.length - 3; i++) {
      if (str[i] === str[i + 1] && str[i + 2] === str[i + 3] && str[i] !== str[i + 2]) {
        return true;
      }
    }
  }
  if (pattern === 'XXYYZZ') {
    for (let i = 0; i < str.length - 5; i++) {
      if (str[i] === str[i + 1] && str[i + 2] === str[i + 3] && 
        str[i + 4] === str[i + 5] && str[i] !== str[i + 2] && 
        str[i] !== str[i + 4]) {
          return true;
      }
    }
  }
  if (pattern === 'XXYYX') {
    for (let i = 0; i < str.length - 4; i++) {
      if (str[i] === str[i + 1] && str[i + 2] === str[i + 3] && 
        str[i] === str[i + 4] && str[i] !== str[i + 2]) {
          return true;
        }
    }
  }
  return false;
}
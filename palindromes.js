/**
 * This function takes in a variable number of string inputs to read and
 * determine whether or not the strings make up a palindrome when concatenated.
 * Skips over spaces, punctuations, and new lines. Casing is irrelevant.
 * 
 * @param  {...any/String} args - A variable number of string inputs
 * @returns {String} - Returns a string telling whether the inputs make up
 * a palindrome
 */
function palindromes (...args) {
  let longStr = '';
  for (let arg of args) {
    longStr += arg;
  }
  longStr = longStr.toLowerCase();
  for (let i = 0, j = longStr.length - 1; i < longStr.length; i++) {
    if (charIsLetter(longStr[i]) && charIsLetter(longStr[j])) {
      if (longStr[i] !== longStr[j]) {
        return 'Not a palindrome';
      } else {
        j--;
      }
  } else if (charIsLetter(longStr[i])) {
    if (!(charIsLetter(longStr[j]))) {
      i--;
      j--;
    }
    }
  }
  return 'Palindrome';
}

/**
 * This function takes in a string character and returns true if the character
 * is a letter, false otherwise.
 * 
 * @param {String} char - A string character
 * @returns {Boolean} - Returns a Boolean
 */
function charIsLetter (char) {
  if (typeof char !== 'string') {
    return false;
  }
  return char.toLowerCase() !== char.toUpperCase();
}
/**
 * Given a lowercase letter and a number between 0 and 26, return that letter
 * Caesar shifted by the parameter number that many steps, wrapping around
 * from z back to a.
 * 
 * @param {String} char - A string character
 * @param {Number} num - A number to shift the string parameter by
 * @returns {String} - Returns a character
 */
function caesarCipher (char, num) {
  let myChar = char.charCodeAt(0);
  if (num + myChar > 122) {
    return String.fromCharCode(num + myChar - 26);
  } else {
    return String.fromCharCode(myChar);
  }
}
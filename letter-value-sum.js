/**
 * Returns the sum of the values of the letters in a string.
 * The string will be all lowercase letters, with each letter assigned
 * a value between 1 (a) and 26 (z).
 * 
 * @param {String} str - A string parameter
 * @returns {Number} - Returns a sum
 */
function letterValueSum (str) {
  let total = 0;
  let splitString = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    total += splitString[i].charCodeAt(0) - 96;
  }
  return total;
}
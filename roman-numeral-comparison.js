/**
 * Computes the Roman Numerals from two strings using only additive notion 
 * (not subtractive notion), and returns true if the sum value of the elements 
 * in the first string parameter is less than the sum of the values 
 * of the second parameter.
 * 
 * @param {String} str1 - First string of Roman Numerals
 * @param {String} str2 - Second string of Roman Numerals
 * @returns {Boolean} - Returns a Boolean
 */
function romanNumeralComparison (str1, str2) {
  let values = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
  let total1 = 0;
  let total2 = 0;
  let splitString1 = str1.split("");
  let splitString2 = str2.split("");
  for (let i = 0; i < splitString1.length; i++) {
    let key = splitString1[i];
    total1 += values[key];
  }
  for (let i = 0; i < splitString2.length; i++) {
    let key = splitString2[i];
    total2 += values[key];
  }
  return total1 < total2;
}
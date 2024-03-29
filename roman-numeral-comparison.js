/**
 * Computes the Roman Numerals from two strings using only additive notion 
 * (not subtractive notion), and returns true if the sum value of the elements 
 * in the first string parameter is less than the sum of the values 
 * of the second parameter.
 * 
 * @param {string} str1 - First string of Roman Numerals
 * @param {string} str2 - Second string of Roman Numerals
 * @returns {boolean} - Returns a Boolean
 */
function romanNumeralComparison (str1, str2) {
  let numeralValues = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
  let total = 0;
  let splitString1 = str1.split("");
  let splitString2 = str2.split("");
  let maxLength = str1.length >= str2.length ? str1.length : str2.length;
  for (let i = 0, j = 0; i < maxLength && j < maxLength; i++, j++) {
    if (i < str1.length && j < str2.length) {
      total += numeralValues[splitString1[i]];
      total -= numeralValues[splitString2[j]];
    } else if (i < maxLength) {
      total += numeralValues[splitString1[i]];
    } else {
      total -= numeralValues[splitString2[j]];
    }
  }
  return total < 0;
}
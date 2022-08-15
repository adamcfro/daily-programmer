/**
 * This function takes in a string of numbers with different delimiters
 * and returns true if, once delimiters have been removed, there are ten
 * numbers in the string. Returns false otherwise.
 * 
 * @param {string} str - A string of numbers and delimiters
 * @returns {boolean} - Returns true if there are exactly 10 numbers
 */
function validPhoneNumber (str) {
  str = str.split(/[-.()\s]+/).join('');
  return str.length === 10;
}
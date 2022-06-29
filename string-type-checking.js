/**
 * This function takes in a string as input and returns a string explaining
 * what "type" of string the parameter is.
 * Distinguishes between int, float, date, and text.
 * 
 * @param {string} str - A string parameter
 * @returns {string} - Returns a descriptive string
 */
function stringTypeChecking (str) {
  let stringType = '';
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-z]/.test(str[i])) {
      stringType = 'text';
    } else if (str[i] === '-') {
      stringType = 'date';
    } else if (str[i] === '.') {
      stringType = 'float';
    }
  }
  if (stringType.length === 0) {
    stringType = 'int';
  }
  return stringType;
}
/**
 * This function takes in a string as input and returns true if all letters
 * are in alphabetical order.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a string telling if the parameter is in
 * alphabetical order
 */
function alphabeticalOrder (str) {
  str = str.toLowerCase();
  let asciiNum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= asciiNum) {
      asciiNum = str.charCodeAt(i);
    } else {
      return 'NOT IN ORDER';
    }
  }
  return 'IN ORDER';
}
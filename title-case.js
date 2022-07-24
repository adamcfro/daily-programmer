/**
 * This function takes in two parameters: a string parameter and an array of
 * exceptions. All words in the string parameter have their first character 
 * capitalized UNLESS the word appears in the exceptions array, in which case the 
 * words is left in lowercase. Returns the modified string.
 * 
 * @param {string} str - A string parameter
 * @param {Array} exceptions - An array of string exceptions
 * @returns {string} - Returns a modified string
 */
function titleCase (str, exceptions) {
  str = str.toLowerCase().split(' ');
  str[0] = str[0][0].toUpperCase() + str[0].substring(1);
  for (let i = 1; i < str.length; i++) {
    if (!exceptions.includes(str[i])) {
      str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
  }
  str = str.join(' ');
  return str;
}
/**
 * This function takes in two strings, a word/phrase and a set of
 * characters, and returns the first string with all characters removed from
 * it that also appear in the second string.
 * 
 * @param {string} str - A string parameter
 * @param {string} chars - A string of character exclusions
 * @returns {string} - Returns a modified string
 */
function charRemoval (str, chars) {
  for (let i = 0; i < str.length;) {
    if (chars.includes(str[i])) {
      str = str.replace(str[i], '');
    } else {
      i++;
    }
  }
  return str;
}
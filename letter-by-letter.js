/**
 * Changes a string to another string, letter by letter. 
 * Strings will always have the same length. 
 * Outputs only lines where a letter has been changed.
 * 
 * @param {String} str1 - First string parameter
 * @param {String} str2 - Second string parameter
 */
function letterByLetter (str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (i === 0) {
      console.log(str1);
    }
    if (str1[i] !== str2[i]) {
      console.log(str2.substring(0, i + 1) + str1.substring(i + 1));
    }
  }
}
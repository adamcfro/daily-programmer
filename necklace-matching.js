/**
 * Two strings describe the same thing if you can remove some number of letters
 * from the beginning of one, attach them to the end in their original order,
 * and get the other string. Returns true if the strings describe the same
 * thing.
 * 
 * @param {String} str1 - First string parameter
 * @param {String} str2 - Second string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function necklaceMatching (str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1 === str2.substring(i) + str2.substring(0, i)) {
      return true;
    }
  }
  return false;
}
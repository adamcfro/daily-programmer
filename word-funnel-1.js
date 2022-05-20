/**
 * Given two strings of letters, returns true if the second string can be made
 * from the first by removing one letter. The remaining letters must stay 
 * in the same order.
 * 
 * @param {String} str1 - First string parameter
 * @param {String} str2 - Second string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function funnel (str1, str2) {
  let count = 0;
  let j = 0;
  for (let i = 0; i < str1.length; i++) {
    if (count > 1) {
      return false;
    } else if (str1[i] !== str2[j]) {
      count++;
    } else {
      j++;
    }
  }
  if (j === str2.length) {
    return true;
  } 
  return false;
}
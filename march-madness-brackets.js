/**
 * This function takes in a string as input and decodes the 'message' by
 * removing the the brackets, starting from the deepest point, and adding
 * what is inside the brackets to a new string. Returns the newly decoded
 * 'message' string.
 * 
 * 
 * @param {string} str - A string parameter with a series of brackets
 * @returns {string} - Returns a newly decoded string
 */
function brackets (str) {
  let matchingBrackets = {']': '[', '}': '{', ')': '('};
  let left = 0;
  let right = 0;
  let newStr = '';
  let i = 0;
  while (i < 200) {
    if (str[right] in matchingBrackets) {
      if (matchingBrackets[str[right]] !== str[left] ) {
        left--;
      } else {
        newStr += str.substring(left + 1, right);
        str = str.replace(str.substring(left, right + 1), '');
        right = left;
      }
    } else {
      left++;
      right++;
    }
    i++;
  }
  return newStr;
}
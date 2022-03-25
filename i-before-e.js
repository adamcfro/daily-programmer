/**
 * This function checks whether or not a given word follows
 * the "I before E except after C" rule.
 * Returns true if the string parameter follows this rule.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function iBeforeE (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 2) === 'ei') {
      if (str[i - 1] !== 'c') {
        return false;
      }
    } else if (str.substring(i, i + 2) === 'ie') {
      if (str[i - 1] === 'c') {
        return false;
      }
    }
  }
  return true;
}
/**
 * This function takes in a string and creates two new strings, adding all
 * consonants to one string and all vowels to the other, then returns
 * both new strings.
 * 
 * @param {String} str - A string parameter 
 * @returns {String} - Returns new strings
 */
function disemvoweler (str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonantStr = '';
  let vowelStr = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelStr += str[i];
    } else if (str[i] !== ' ') {
      consonantStr += str[i];
    }
  }
  return consonantStr + '\n' + vowelStr;
}
/**
 * This function takes in a variable number of string parameters and returns
 * an array of strings, where each string contains all the vowels in 
 * alphabetical order.
 * 
 * @param  {...string} args - A variable number of strings
 * @returns {Array} - Returns an array of strings with ordered vowels
 */
function orderedVowelsChecker (...args) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let orderedVowelWords = [];
  for (let arg of args) {
    for (let i = 0; i < arg.length; i++) {
      if (arg[i] === vowels[0]) {
        vowels.shift();
      }
    }
    if (vowels.length === 0) {
      orderedVowelWords.push(arg);
    }
    vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  }
  return orderedVowelWords;
}
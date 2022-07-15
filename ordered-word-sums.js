/**
 * This function takes in a variable number of string parameters, sums the 
 * individual digits in each string (a = 1, b = 2, etc), and returns an array
 * of the strings sorted by their sums from lowest to highest.
 * 
 * @param  {...string} args - A variable number of string parameters
 * @returns {Array} - Returns an array with words sorted by character sums
 */
function ows (...args) {
  let words = {};
  let wordSum = 0;
  for (let arg = 0; arg < args.length; arg++) {
    let word = args[arg];
    for (let i = 0; i < word.length; i++) {
      wordSum += word.charCodeAt(i) - 96;
      if (i + 1 === word.length) {
        words[word] = wordSum;
        wordSum = 0;
      }
    }
  }
  let wordArr = Object.entries(words).sort((a, b) => a[1] - b[1]);
  let returnData = wordArr.map(function(x) {
    return x[0];
  });
  return returnData;
}
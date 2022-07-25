/**
 * This function takes in a string parameter and returns the sentence with the 
 * most words as well as the count of words from that sentence.
 * 
 * @param {string} str - A string parameter
 * @returns {string} - Returns a string with the longest sentence and count of
 * words in that sentence
 */
function sentenceLengths (str) {
  let longestSentence = '';
  let longestSentenceLength = 0;
  str = str.split(/[.?]/).filter(element => {
    return element !== '';
  });
  for (let i = 0; i < str.length; i++) {
    let currentStr = str[i].split(' ');
    if (currentStr.length > longestSentenceLength) {
      longestSentenceLength = currentStr.length;
      longestSentence = currentStr.join(' ');
    }
  }
  return longestSentenceLength + ':' + longestSentence;
}
/**
 * This function takes in a string parameter, separates the string into a list of words, and returns a sorted array, with words sorted from highest occurrence to lowest, along with the number of times each word appears appear.
 * 
 * @param {string} str - A string parameter
 * @returns {Array} - Returns an array with the count of each word's appearance
 */
function randomTalker (str) {
  let words = {};
  str = str.split(/[\s.,:;!?]/).filter(element => element);
  for (let i = 0; i < str.length; i++) {
    words[str[i]] = (words[str[i]] || 0) + 1;
  }
  let sorted = [];
  for (let word in words) {
    sorted.push([word, words[word]]);
  }
  sorted.sort(function(a, b) {
    return b[1] - a[1];
  });
  return sorted;
}
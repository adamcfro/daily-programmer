/**
 * This function takes an input of a 7-letter string (Scrabble Tiles),
 * and determines whether the second input string can be made with the first
 * parameter string. Returns true if so, false otherwise.
 * 
 * @param {String} tiles - A string made up of Scrabble tiles
 * @param {String} word - A target word to create from the first parameter
 * @returns {Boolean} - Returns a Boolean
 */
function scrabble (tiles, word) {
  let letters = {};
  for (let char of tiles) {
    letters[char] = (letters[char] || 0) + 1;
  }
  for (let char of word) {
    if (letters[char] > 0) {
      letters[char]--;
    } else {
      return false;
    }
  }
  return true;
}
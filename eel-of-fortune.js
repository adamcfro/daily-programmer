/**
 * There is a show called 'Eel of Fortune' that follows rules similar to 
 * 'Wheel of Fortune'. A contestant guesses a letter and the letter shows 
 * up on the board. This function takes in two parameters: a secret word and 
 * an offensive word, then looks for possible offensive words that might show 
 * up on the board, and alerts the producers of the show.
 * 
 * @param {String} secretWord - First string parameter
 * @param {String} offensiveWord - Second string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function eelOfFortune (secretWord, offensiveWord) {
  let board = '.'.repeat(secretWord.length);
  for (let i = 0; i < offensiveWord.length; i++) {
    for (let j = 0; j < secretWord.length; j++) {
      if (secretWord[j] === offensiveWord[i]) {
        board = board.slice(0, j) + offensiveWord[i] + board.slice(j + 1);
        let possibleOffensiveWord = board.replaceAll('.', '');
        if (possibleOffensiveWord === offensiveWord) {
          return true;
        }
      }
    }
  }
  return false;
}
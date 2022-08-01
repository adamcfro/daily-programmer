/**
 * This function takes in two string parameters, checks the balance of
 * letters on each side, comparing and eliminating identical characters at
 * a ratio of 1 for 1, and returns which side has more letters, as well as the
 * unique, unbalanced letters from each side.
 * 
 * @param {string} str1 - First string parameter
 * @param {string} str2 - Second string parameter
 * @returns {string} - Returns a string showing the winner and unique chars
 */
function wordsWithEnemies (str1, str2) {
  let leftovers1 = '';
  let leftovers2 = '';
  let strObj = {};
  for (let char in str1) {
    strObj[str1[char]] = (strObj[str1[char]] || 0) + 1;
  }
  for (let char in str2) {
    if (str2[char] in strObj) {
      strObj[str2[char]] -= 1;
    } else {
      leftovers2 += str2[char];
    }
  }
  for (const char in strObj) {
    if (strObj[char] > 0) {
      leftovers1 += char;
    }
  }
  let winner = '';
  if (leftovers1.length > leftovers2.length) {
    winner = 'Left wins!';
  } else if (leftovers1.length < leftovers2.length) {
    winner = 'Right wins!';
  } else {
    winner = 'Tie!';
  }
  return `${winner} Leftover letters: ${leftovers1} - ${leftovers2}`;
}
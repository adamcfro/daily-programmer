/**
 * This function takes in a string representation of a phone number, with
 * some of the numbers represented as letters on a keypad. Letters are
 * converted to numbers, and the numbers-only phone number is returned
 * in string format.
 * 
 * @param {string} phoneNum - A string representation of a phone number
 * @returns {string} - Returns a new string
 */
function phoneConversion (phoneNum) {
  let newNumber = '';
  let letterValue = {
    'A': '2',
    'B': '2',
    'C': '2',
    'D': '3',
    'E': '3',
    'F': '3',
    'G': '4',
    'H': '4',
    'I': '4',
    'J': '5',
    'K': '5',
    'L': '5',
    'M': '6',
    'N': '6',
    'O': '6',
    'P': '7',
    'Q': '7',
    'R': '7',
    'S': '7',
    'T': '8',
    'U': '8',
    'V': '8',
    'W': '9',
    'X': '9',
    'Y': '9',
    'Z': '9',
  }
  for (let i = 0; i < phoneNum.length; i++) {
    if (i === 9) {
      newNumber += '-';
    }
    if (isCharLetter(phoneNum[i])) {
      newNumber += letterValue[phoneNum[i]];
    } else {
      newNumber += phoneNum[i];
    }
  }
  return newNumber;
}


/**
 * This function takes in a string character and returns true if that
 * character is a letter.
 * 
 * @param {string} char - A string character
 * @returns {boolean} - Returns a boolean
 */
function isCharLetter (char) {
  return (/[a-zA-Z]/).test(char);
}
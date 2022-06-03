/**
 * This function takes in a string (Declaration of Independence), an array of
 * numbers corresponding to the words in the string, and returns a deciphered 
 * message using the Beale Cipher.
 * 
 * 
 * @param {String} str - A string parameter
 * @param {Array} arr - An array of numbers
 * @returns {String} - Returns a deciphered string
 */
function bealeCipher (str, arr) {
  let splitStr = str.split(' ');
  let decryptedMessage = '';
  for (let i = 0; i < arr.length; i++) {
    decryptedMessage += splitStr[arr[i] - 1][0];
  }
  return decryptedMessage;
}
/**
 * This function takes in a string as input, and, using the Atbash Cipher, 
 * returns a newly decrypted string.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a new string
 */
function atbashCipher (str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let cipher = 'zyxwvutsrqponmlkjihgfedcba';
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!(alphabet.includes(str[i]))) {
      newStr += str[i];
    } else {
      let index = alphabet.indexOf(str[i]);
      newStr += cipher[index];
    }
  }
  return newStr;
}
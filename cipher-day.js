/**
 * This function takes in a string parameter, and either encrypts or decrypts
 * the string. For encryption, adds 1 to each character's ascii value, and 
 * returns a newly encrypted string. For decryption, subtracts 1 from each
 * character's ascii value, and returns the decrypted string.
 * 
 * @param {string} str - A string parameter
 * @param {encryption} - A string stating whether the message should be
 * encrypted or decrypted
 * @returns {string} - Returns an encrypted string
 */
function cipherDay (str, encryption) {
  if (encryption === 'encrypt') {
    let encryptedStr = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i) + 1;
      if (charCode > 122) {
        charCode -= 26;
      }
      encryptedStr += String.fromCharCode(charCode);
    }
    return encryptedStr;
  }
  else {
    let decryptedStr = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i) - 1;
      if (charCode > 122) {
        charCode -= 26;
      }
      decryptedStr += String.fromCharCode(charCode);
    }
    return decryptedStr;
  }
}



// take in string, loop through
// rotate string by certain number
// return string
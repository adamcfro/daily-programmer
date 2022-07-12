/**
 * This function takes in two parameters: a string message and a string key
 * that is used to encrypt the message. The key is repeated until it is the
 * same length as the message. The cipher works by adding the char codes
 * at each index of the message and key strings, generating a new letter for
 * the encryption. Returns the encrypted string.
 * 
 * @param {string} message - First string parameter
 * @param {string} key - second string parameter
 * @returns {string} - Returns an encrypted string
 */
function viginereCipher (message, key) {
  let alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let repeatedKey = '';
  let encryptedKey = '';
  for (let i = 0, j = 0; i < message.length; i++) {
    repeatedKey += key[j];
    j++;
    if (j === key.length) {
      j = 0;
    }
  }
  for (let i = 0; i < message.length; i++) {
    let charCode = 
      alphabet.indexOf(message[i]) + alphabet.indexOf(repeatedKey[i]);
    if (charCode > 25) {
        charCode -= 26;
    }
    encryptedKey += alphabet[charCode];
  }
  return encryptedKey;
}
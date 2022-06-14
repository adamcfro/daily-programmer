/**
 * This function takes in a string and returns a new string encoded in
 * Rövarspråket, the secret language of the Swedes.
 * In Rövarspråket, you take an ordinary word and replace the consonants with
 * the consonant doubled and with an 'o' in between ('b' becomes 'bob').
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a new string
 */
function rovarspraket (str) {
  let encodedStr = '';
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'ö', 'å', 'ä'];
  let punctuation = ['!', '"', '#', '$', '%', '&', '(', "'", ')', '*', '+', 
  ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\'', '^', '`', 
  '{', '|', '}', '~', "'", ']', '_', ' '];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      encodedStr += str[i];
    } else if (punctuation.includes(str[i])) {
      encodedStr += str[i];
    } else {
      encodedStr += str[i] + 'o' + str[i].toLowerCase();
    }
  }
  return encodedStr;
}
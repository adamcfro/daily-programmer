/**
 * This function takes in a string and returns the translated L33tspeak
 * string.
 * 
 * In L33tspeak, you substitute letters for their rough outlines in ASCII
 * characters, e.g. symbols or numbers.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a translated string
 */
function l33tspeakTranslator (str) {
  let leetspeak = {
    'a': '4',
    'b': '6',
    'e': '3',
    'i': '1',
    'l': '1',
    'm': '(V)',
    'n': '(\)',
    'o': '0',
    's': '5',
    't': '7',
    'v': '\/',
    'w': '`//'
  }
  let translatedPhrase = '';
  for (let char of str) {
    if (leetspeak[char]) {
      translatedPhrase += leetspeak[char].toUpperCase();
    } else if (Object.values(leetspeak).includes(char)) {
      translatedPhrase += getObjKey(leetspeak, char).toUpperCase();
    } else {
      translatedPhrase += char.toUpperCase();
    }
  }
  return translatedPhrase;
}

/**
 * A helper function that finds and returns a value in an object.
 * 
 * @param {Object} obj - An object parameter
 * @param {String} value - A string parameter
 * @returns {String} - Returns a string character
 */
function getObjKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}
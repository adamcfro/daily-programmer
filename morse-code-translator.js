/**
 * This function takes in a string of Morse code, translates it into words,
 * and returns the newly translated string.
 * 
 * @param {string} str - A string of Morse Code
 * @returns {string} - Returns a translated string
 */
function morseCodeTranslator (str) {
  const morseCode = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z'
  };
  let translation = [];
  str = str.split('/');
  for (let i = 0; i < str.length; i++) {
    let currentWord = str[i].split(' ').filter(element => element);
    let translatedWord = '';
    for (let j = 0; j < currentWord.length; j++) {
      translatedWord += morseCode[currentWord[j]];
      if (j + 1 >= currentWord.length) {
        translation.push(translatedWord);
        translatedWord = '';
      }
    }
  }
  return translation.join(' ');
}
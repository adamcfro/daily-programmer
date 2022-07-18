/**
 * NOT COMPLETED
 * 
 * @param {*} str 
 * @returns 
 */
function smalpha (str) {
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
  let i = 0;
  let j = 4;
  let convertedStr = '';
  while (j < str.length) {
    if (morseCode.hasOwnProperty(str.substring(i, j))) {
      convertedStr += morseCode[str.substring(i, j)];
      delete morseCode[str.substring(i, j)];
      i = j;
      j = i + 4;
    } else {
      j--;
    }
    if (j <= 0) {
      break;
    }
  }
  return convertedStr;
}
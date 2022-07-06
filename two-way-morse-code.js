/**
 * This function takes in a string and decodes that string from Morse Code
 * to the English alphabet, or from the English alphabet to Morse Code.
 * Returns the decoded string.
 * 
 * @param {string} str - A string parameter
 * @returns {string} - Returns a decoded string
 */
function twoWayMorseCode (str) {
  let alphabet = {a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..'};
  let decodedStr = '';
  // translating from morse to English
  if (str[0] === '.' || str[0] === '-') {
    let splitStr = str.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      let val = getKeyByValue(alphabet, splitStr[i]);
      decodedStr += val;
    }
  // translating from English to morse
  } else {
    for (let i = 0; i < str.length; i++) {
      decodedStr += alphabet[str[i]];
    }
  }
  return decodedStr;
}

/**
 * 
 * @param {Object} object - An alphabet object
 * @param {string} value - A string character parameter
 * @returns {string} - Returns the respective key if condition satisfied
 */
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
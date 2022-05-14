/**
 * This function takes in a string as a parameter and returns a string
 * representation of the parameter converted into morse code.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a string
 */
function smorse (str) {
  const morseCode = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    'v': '...-',
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
 };
 let morseCodeStr = '';
 let splitStr = str.split('');
 for (let i = 0; i < splitStr.length; i++) {
   morseCodeStr += morseCode[splitStr[i]];
 }
 return morseCodeStr;
}
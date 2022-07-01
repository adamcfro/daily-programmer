/**
 * This function takes in a string parameter where each character has been
 * shifted one key to the right on the keyboard, and returns a new string
 * where each character has been shifted back to the left on the keyboard.
 * 
 * @param {string} str - A string paramter
 * @returns {string} - Returns a new string
 */
function keyboardShift (str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let shiftAlph = 'snvfrghjokl;,mp[wtdyibecuxSNVFRGHJOKL:<MP{WTDYIBECUX"';
  let shiftedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      shiftedStr += ' ';
    } else {
      let index = shiftAlph.indexOf(str[i]);
      shiftedStr += alphabet[index];
    }
  }
  return shiftedStr;
}
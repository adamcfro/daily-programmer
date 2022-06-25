/**
 * This function takes in a string as input and returns true if every letter
 * of the alphabet is used at least once in the string.
 * 
 * @param {String} str - A string parameter
 * @returns {Boolean} - Returns a Boolean
 */
function pangrams (str) {
  let alphabet = {
    a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, 
    k: 1, l: 1, m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, 
    u: 1, v: 1, w: 1, x: 1, y: 1, z: 1};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] in alphabet) {
      alphabet[str[i]] -= 1;
    }
  }
  for (const [key, value] of Object.entries(alphabet)) {
    if (value > 0) {
      return false;
    }
  }
  return true;
}
/**
 * The Look and Say sequence is a series of numbers where each term is given
 * by describing the makeup of the previous term.
 * The 1st term is given as 1. The 2nd term is 11 ('one one') because the first
 * term (1) consisted of a single 1. The 3rd term is then 21 ('two one')
 * because the second term consisted of two 1's.
 * 
 * @param {Number} count - A count of how many terms to find
 * @returns {String} - Returns a string declaring end of function
 */
function lookAndSay (count) {
  let phrase = String(1);
  let loop = 1;
  let consecutiveElems = 1;
  while (loop < count) {
    let num = phrase;
    phrase = '';
    for (let i = 0; i < num.length; i++) {
      if (num === '1') {
        phrase += String(consecutiveElems) + num[i];
      } else if (num[i] === num[i + 1]) {
        consecutiveElems++;
      } else {
        phrase += String(consecutiveElems) + num[i];
        consecutiveElems = 1;
      }
    }
    loop++;
  }
  return Number(phrase);
}
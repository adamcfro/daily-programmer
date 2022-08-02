/**
 * The ABACABA sequence is defined as follows: the first iteration is the first
 * letter of the alphabet (a). To form the second iteration, you take the 
 * second letter (b) and put the first iteration (just a in this case) before 
 * and after it, to get aba. For each subsequent iteration, place a copy of 
 * the previous iteration on either side of the next letter of the alphabet.
 * Returns a string representation of the ABACABA sequence.
 * 
 * @param {number} n - Number of iterations
 * @returns {string} - Returns a string
 */
function abacaba(n) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (n === 1) {
    return 'a';
  }
  return abacaba(n - 1) + alphabet[n - 1] + abacaba(n - 1);
}
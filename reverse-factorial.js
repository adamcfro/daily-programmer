/**
 * This function takes in a number, and returns a string representation of
 * the reverse factorial of the number, if it exists. Otherwise, returns false.
 * 
 * @param {Number} num - A number parameter
 * @returns {String} - Returns a string
 */
function reverseFactorial (num) {
  for (let i = 2; num !== 1; i++) {
    num = num / i;
    if (num === 1) {
      return `${i}!`;
    } else if (!(Number.isInteger(num))) {
      return 'NONE';
    }
  }
}
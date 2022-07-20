/**
 * This function takes in a number in string format, and returns true if the
 * parameter is a valid ISBN.
 * 
 * A valid ISBN is calculated by multiplying each digit by its position in the
 * code (1-10), adding those numbers together, and checking that the total is
 * a multiple of 11.
 * 
 * @param {string} str - A string of numbers
 * @returns {boolean} - Returns a boolean
 */
function isbnValidator (str) {
  let total = 0;
  for (let i = 0, j = 10; i < str.length; i++) {
    if (str[i] !== '-') {
      total += Number(j) * Number(str[i]);
      j--;
    }
  }
  return (total % 11 === 0);
}
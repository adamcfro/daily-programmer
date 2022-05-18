/**
 * Given two positive numbers (with the second one greater than or equal to the
 * first), returns how many leap years appear between January 1st of the first
 * year, and January 1st of the second year in the Revised Julian Calendar.
 * 
 * @param {Number} year1 - First number parameter
 * @param {Number} year2 - Second number parameter
 * @returns {Number} - Returns a count
 */
function leaps (year1, year2) {
  let count = 0;
  for (let i = year1; i < year2; i++) {
    if (i % 900 === 200 || i % 900 === 600) {
      count++;
    } else if (i % 100 === 0) {
      continue;
    } else if (i % 4 === 0) {
      count++;
    }
  }
  return count;
}
/**
 * This function takes in a number parameter and returns a count of the numbers
 * in range 'num' that aren't evenly divisible by 3, 14, or 100.
 * 
 * @param {number} num - A number parameter
 * @returns {number} - Returns a count
 */
function powerplantSimulation (num) {
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) {
      count++;
    } else if (i % 14 === 0) {
      count++;
    } else if (i % 100 === 0) {
      count++;
    }
  }
  return num - count;
}
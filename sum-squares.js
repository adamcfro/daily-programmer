/**
 * This function takes in three numbers as arguments and returns the sum
 * of the squares of the two larger numbers.
 * 
 * @param  {...number} args - Number parameters
 * @returns {number} - Returns a sum
 */
function sumSquares (...args) {
  let min = Math.min(...args);
  let filteredParams = args.filter(e => e !== min);
  return filteredParams[0] ** 2 + filteredParams[1] ** 2;
}
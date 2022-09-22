/**
 * This function takes in an array of numbers and a number parameter, then
 * counts up from 0 by cycling through the array and skipping numbers until
 * we find the next number that's a multiple of arr[index]. When the amount
 * of steps reaches the parameter limit, returns the number of steps required
 * to reach that limit.
 * 
 * @param {Array} arr - An array of numbers
 * @param {number} limit - A number representing an upper limit
 * @returns {number} - Returns the number of steps to cycle through and reach
 * the upper limit parameter
 */
function multipleCycling (arr, limit) {
  let index = 0;
  let steps = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % arr[index] === 0) {
      steps++;
      if (index === arr.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }
  }
  return steps;
}
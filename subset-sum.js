/**
 * This function takes in a sorted list of numbers, and returns true if there
 * are two numbers in the array that sum to 0. Also returns true if a 0 appears
 * in the array.
 * 
 * @param {Array} arr - A sorted array of numbers
 * @returns {Boolean} - Returns a Boolean
 */
function subsetSum (arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length) {
    if (arr[i] + arr[j] === 0) {
      return true;
    } else if (arr[i] === 0 || arr[j] === 0) {
      return true;
    } else if (j === i) {
      i++;
      j = arr.length - 1;
    } else {
      j--;
    }
  }
  return false;
}
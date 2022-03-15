/**
 * Given an array of integers and a number (n) between 2 and the length
 * of the aray (inclusive), return the array with the order of the first
 * n elements reversed.
 * 
 * @param {Array} arr - An array of numbers
 * @param {Number} n - The first n elements of the array
 * @returns {Array} - Returns a modified array
 */
function flipfront (arr, n) {
  let newArray = [];
  n -= 1;
  for (let i = 0; i < arr.length; i++) {
    while (n >= 0) {
      newArray.push(arr[n]);
      n -= 1;
      i++;
    } if (i < arr.length) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
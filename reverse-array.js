/**
 * Takes a number and an array as input and reverses the first N items in the
 * array while leaving the rest of the array the same. Returns the modified
 * array.
 * 
 * @param {number} n - A number specifying the first n items of the array
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns a modified array
 */
function reverse (n, arr) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
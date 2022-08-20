/**
 * This function takes in an array of numbers and a starting block position,
 * reverses all numbers up to that index, adds the rest of the array back in,
 * and returns the new array.
 * 
 * @param {Array} arr - An array of numbers
 * @param {number} index - Numbers before this index are to be reversed
 * @returns {Array} - Returns a partially reversed array
 */
function blockReversal (arr, index) {
  let newArr = [];
  for (let i = index - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  for (let i = index; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
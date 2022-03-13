/**
 * Given a binary array of any length, returns an array of positive integers
 * that represent the lengths of the sets of consecutive 1's in the input
 * array, in order from left to right.
 * 
 * @param {Array} arr - A binary array
 * @returns {Array} - Returns a new array
 */
function nonogramRow (arr) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && count > 0) {
      newArray.push(count);
      count = 0;
    } else if (arr[i] === 0) {
      count = 0;
    } else if (arr[i] === 1) {
      count += 1;
    }
    if (i + 1 >= arr.length && count > 0) {
      newArray.push(count);
    }
  }
  return newArray;
}
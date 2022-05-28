/**
 * This function takes in an array of numbers and returns the sum of the
 * distances between consecutive integers in the array.
 * 
 * In the array [1, 3, 5, 2, 6], 1 and 2 are consecutive integers that are
 * three steps apart. 5 and 6 are consecutive integers that are two steps
 * apart. So the sum of distance for consecutive integers in this array is 5.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Number} - Returns a sum
 */
function distanceRating (arr) {
  let count = 0;
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[index] - arr[i]) === 1) {
      count += Math.abs(index - i);
    }
    if (i + 1 === arr.length) {
      index++;
      i = index;
    }
  }
  return count;
}
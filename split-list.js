/**
 * This function takes in an array as an input, spits the array in half, and
 * returns the array as two arrays.
 * 
 * @param {Array} arr - An array parameter
 * @returns {Array} - Returns two sliced arrays
 */
function splitList (arr) {
  let middle = Math.floor(arr.length / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
}
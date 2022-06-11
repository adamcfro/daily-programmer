/**
 * This function takes in an array of numbers and 'culls' any of the numbers
 * that are repeats. Returns the array with no repeats.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns an array of numbers
 */
function cullingNumbers (arr) {
  let newSet = new Set();
  for (let elem of arr) {
    newSet.add(elem);
  }
  let newArr = Array.from(newSet);
  return newArr;
}
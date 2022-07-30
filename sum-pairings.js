/**
 * This function takes in an array of numbers and returns the pairs of numbers
 * from the array that sum up to equal the target parameter.
 * 
 * @param {Array} arr - An array of numbers
 * @param {number} target - A target number
 * @returns {Array} - Returns an array of arrays
 */
function sumPairings (arr, target) {
  let pairs = [];
  let usedNums = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        if (!usedNums.has(arr[i]) && !usedNums.has(arr[j])) {
          pairs.push([arr[i], arr[j]]);
          usedNums.add(arr[i]);
          break;
        }
      }
    }
  }
  return pairs;
}
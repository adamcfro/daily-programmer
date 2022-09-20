/**
 * This function takes in an array of integers and a target number and returns
 * true if any two integers in the list sum to the target number. 
 * Returns false otherwise.
 * 
 * @param {Array} arr - An array of integers
 * @param {number} target - A target sum
 * @returns {Array} - Returns an array of numbers that sum to the target
 */
function twoSum (arr, target) {
  let storageHash = {};
  let targetPairs = [];
  for (let n in arr) {
    let num = target - arr[n];
    if (num in storageHash) {
      targetPairs.push([num, arr[n]]);
    }
    storageHash[arr[n]] = n;
  }
  return targetPairs;
}
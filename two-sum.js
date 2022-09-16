/**
 * This function takes in an array of integers and a target number and returns
 * true if any two integers in the list sum to the target number. 
 * Returns false otherwise.
 * 
 * @param {Array} arr - An array of integers
 * @param {number} target - A target sum
 * @returns {Array} - Returns an array of numbers than sum to the target
 */
function twoSum (arr, target) {
  let storageHash = {};
  let numPairs = [];
  for (let num in arr) {
    let addedNum = target - arr[num];
    if (addedNum in storageHash) {
      numPairs.push([addedNum, arr[num]]);
    }
    storageHash[arr[num]] = num;
  }
  return numPairs;
}
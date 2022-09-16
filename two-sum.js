/**
 * This function takes in an array of integers and a target number and returns
 * true if any two integers in the list sum to the target number. 
 * Returns false otherwise.
 * 
 * @param {Array} arr - An array of integers
 * @param {number} target - A target sum
 * @returns {boolean} - Returns true if two integers sum to the target
 */
function twoSum (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i !== j) {
        return true;
      }
    }
  }
  return false;
}
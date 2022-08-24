/**
 * This function takes in two array parameters and takes any element that
 * exists in the second array but not the first, and appends that element
 * to the first array. Returns the modified first array.
 * 
 * @param {Array} arr1 - First array parameter
 * @param {Array} arr2 - Second array parameter
 * @returns {Array} - Returns the modified first array
 */
function appendToArray (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return arr1;
}
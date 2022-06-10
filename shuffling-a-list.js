/**
 * This function takes in a list of elements, and returns that list of elements
 * in a new shuffled order. Does not use any built-in shuffle or random method.
 * 
 * @param {Array} arr - An array of elements
 * @returns {Array} - Returns a shuffled array
 */
function shufflingAList (arr) {
  let newArr = [];
  let arrLength = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let date = new Date();
    let ms = date.getMilliseconds();
    let lastDigit = ms % 10;
    if (lastDigit > arrLength) {
      while (lastDigit > arrLength) {
        date = new Date();
        ms = date.getMilliseconds();
        lastDigit = ms % 10;
      }
    }
    newArr.push(arr[lastDigit]);
    arr.splice(lastDigit, 1);
    arrLength--;
  }
  return newArr;
}
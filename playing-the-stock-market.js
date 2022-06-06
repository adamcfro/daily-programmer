/**
 * This function takes in an array of numbers representing stock prices,
 * where one should buy low and sell high. Returns the lowest price
 * one should buy at, followed by the highest price one should sell at. 
 * Selling price must occur after the low price in the array.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {Array} - Returns the buying and selling prices of stocks
 */
function stocks (arr) {
  let low = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
      index = i;
    }
  }
  let high = arr[index];
  for (let j = index; j < arr.length; j++) {
    if (arr[j] > high && arr[index] !== arr[j]) {
      high = arr[j];
    }
  }
  return [low, high];
}
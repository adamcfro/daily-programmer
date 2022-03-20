/**
 * This function takes the input of five dice rolls, each with a value between
 * 1 and 6, and sums each number with similar values (1's summed with 1's, etc).
 * Returns the largest sum.
 * 
 * @param {Array} arr - An array of numbers between 1-6
 * @returns {Number} - Returns a sum
 */
function yahtzeeScoring (arr) {
  let diceRolls = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in diceRolls) {
      diceRolls[arr[i]] += arr[i];
    } else {
      diceRolls[arr[i]] = arr[i];
    }
  }
  let diceValues = Object.values(diceRolls);
  return Math.max(...diceValues);
}
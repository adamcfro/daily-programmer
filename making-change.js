/**
 * Returns the number of coins necessary to make a given amount of change.
 * Coins are worth 1, 5, 10, 25, 100, and 500.
 * 
 * @param {Number} num - A money number
 * @returns {Number} - Returns a count of coins
 */
function makingChange (num) {
  count = 0;
  coins = [500, 100, 25, 10, 5, 1];
  coins.forEach((coin) => {
    while (num >= coin) {
      num -= coin;
      count += 1;
    };
  });
  return count;
}
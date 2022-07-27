/**
 * This function takes in a number parameter and a power to raise the number
 * to, sums all the digits of the raised number, and returns the result.
 * 
 * 
 * @param {number} num - A number parameter
 * @param {number} power - A power number
 * @returns {number} - Returns a sum
 */
function sumOfRaisedNumber (num, power) {
  let total = 0;
  let digits = String(num ** power);
  for (let i = 0; i < digits.length; i++) {
    total += Number(digits[i]);
  }
  return total;
}
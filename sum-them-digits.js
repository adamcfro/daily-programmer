/**
 * This function takes in a number as an input and finds the digital root
 * of the number. The digital root is calculated by summing all the digits,
 * then summing all the digits of the result until only one digit remains.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a single digit number
 */
function sumThemDigits (num) {
  let result = num;
  if (num % 10 === 0) {
    result = num / 10;
  } else {
    result = (result % 10) + (Math.floor(num / 10));
  }
  return result > 9 ? sumThemDigits(result) : result;
}
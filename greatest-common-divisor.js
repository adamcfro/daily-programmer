/**
 * This function takes in two numbers as input and returns the greatest common
 * divisor that exists between the two numbers.
 * 
 * @param {number} num1 - First number parameter
 * @param {number} num2 - Second number parameter
 * @returns {number} - Returns the greates common divisor between two numbers
 */
function gcd (num1, num2) {
  let remainder;
  let divisor;
  let greatestDivisor;
  if (num1 >= num2) {
    remainder = num1 % num2;
    divisor = num2;
  } else {
    remainder = num2 % num1;
    divisor = num1;
  }
  while (remainder !== 0) {
    let temp = remainder;
    remainder = divisor % remainder;
    divisor = temp;
    greatestDivisor = divisor;
  }
  return greatestDivisor;
}
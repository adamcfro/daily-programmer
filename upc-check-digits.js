/**
 * Given an 11-digit number, finds the 12th digit that would make up a valid
 * UPC. First sums digits at even-numbered positions and multiplies the sum
 * by 3. Then the odd-numbered positions are added to the previous sum.
 * Take this sum modulo 10, and if this new sum is 0, then the check digit
 * is 0, otherwise, it is 10 - sum.
 * 
 * @param {number} num - An 11-digit number
 * @returns {number} - Returns a number
 */
function upcCheck (num) {
  let sum1 = 0;
  let sum2 = 0;
  let upcString = num.toString();
  for (let i = 0; i < upcString.length; i++) {
    if (i % 2 === 0) {
      sum1 += Number(upcString[i]);
    } else {
      sum2 += Number(upcString[i]);
    }
  }
  let checkDigit = (sum1 * 3 + sum2) % 10;
  if (checkDigit === 0) {
    return checkDigit;
  } else {
    return 10 - checkDigit;
  }
}
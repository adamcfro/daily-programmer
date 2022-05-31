/**
 * This function takes in a number parameter and returns the largest digit
 * of the parameter.
 * 
 * In number theory, Kaprekar's routine is an iterative algorithm that,
 * with each iteration, takes a natural number in a given number base,
 * creates two new numbers by sorting the digits of its number by descending
 * and ascending order, and subtracts the second from the first to yield
 * the natural number for the next iteration.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns the largest digit from the parameter
 */
function kaprekarsRoutine (num) {
  let numArr = Array.from(String(num), Number);
  return Math.max(...numArr);
}


/**
 * This function takes in a number parameter, sorts the number into descending
 * digits, and returns a number with the same 4-digits in descending order.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a number with its digits sorted in descending
 * order
 */
function kaprekarsRoutine2 (num) {
  let numArr = String(num).split('');
  let sortedArr = numArr.sort((a, b) => b - a);
  let reverseNum = '';
  for (let n of sortedArr) {
    reverseNum += n;
  }
  return Number(reverseNum);
}
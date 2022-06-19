/**
 * This function takes a number as input, and follows a set of rules until
 * the input reaches 1, and returns this number.
 * The rules for A Game of Threes are:
 *   if the number is divisible by 3, divide it by 3.
 *   if it's not, either add 1 or subtract 1 (to make it divisible by 3),
 *   then divide by 3.
 * 
 * @param {Number} num - A number parameter 
 * @returns {Number} - Returns a number (1)
 */
function gameOfThrees (num) {
  while (num > 1) {
    if (num % 3 === 1) {
      console.log(num, -1);
      num -= 1;
    } else if (num % 3 === 0) {
      console.log(num, 0);
      num = num / 3;
    } else {
      console.log(num, 1);
      num += 1;
    }
  }
  return num;
}
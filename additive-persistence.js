/**
 * Calculates the additive persistence of a number, defined as how many loops
 * you have to do summing its digits until you get a single digit number.
 * The total number of iterations is the additive persistence.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a count
 */
function additivePersistence (num) {
  let count = 0;
  while (num > 10) {
    let sum = 0;
    let numsArray = num.toString().split("");
    numsArray.forEach((element) => {
      sum += parseInt(element);
    });
    num = sum;
    count += 1;
  }
  return count;
}
/**
 * This function takes in a number parameter and returns true if the number
 * is a 'torn' number, and returns false otherwise.
 * 
 * A 'torn' number is a four-digit number that can be chopped into two parts
 * which, when added together and squared, are equal to the original number.
 * 
 * @param {number} num - A number parameter
 * @returns {boolean} - Returns a boolean
 */
function tornNumber (num) {
  let uniqueNums = [];
  num = String(num);
  for (let char of num) {
    if (uniqueNums.includes(char)) {
      return false;
    }
    uniqueNums.push(char);
  }
  let summedSides = Number(num[0] + num[1]) + Number(num[2] + num[3]);
  if (summedSides * summedSides === Number(num)) {
    return true;
  }
  return false;
}
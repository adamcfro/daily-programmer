/**
 * This function takes in a number parameter and returns true if it is a
 * self-descriptive number. A descriptive number tells us how many occurences
 * of each number there are based on its index.
 * Example: 1210 
 * (1 at index 0, for the one zero in 1210)
 * (2 at index 1, for the two ones in 1210)
 * (1 at index 2, for the one two in 1210)
 * (0 at index 3, for the zero threes in 1210)
 * 
 * @param {number} num - A number parameter
 * @returns {boolean} - Returns a boolean 
 */
function selfDescriptiveNumbers (num) {
  let count = {0: 0, 1: 0, 2: 0, 3: 0};
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    count[num[i]]++;
  }
  for (let i = 0; i < num.length; i++) {
    if (Number(count[i]) !== Number(num[i])) {
      return false;
    }
  }
  return true;
}
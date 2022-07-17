/**
 * This function takes in two parameters: a target number parameter, and
 * a variable amount of number values. It then determines how many numbers
 * are greater than the target value, and how many numbers can reach the target
 * by cannibalizing another value. When a value is cannibalized, that value is
 * removed, and 1 is added to one of the other values. Returns the count of
 * values greater than or equal to the target.
 * 
 * @param {number} target - A target number
 * @param  {...number} args - A variable amount of number parameters
 * @returns {number} - Returns a count of numbers greater than the target 
 */
function cannibalNumbers (target, ...args) {
  let count = 0;
  let right = 0;
  let sortedArgs = args.sort(function (a, b) {
    return b - a;
  });
  for (let num of sortedArgs) {
    if (num >= target) {
      count++;
      right++;
    }
  }
  sortedArgs = sortedArgs.splice(right);
  for (let i = 0; i < sortedArgs.length;) {
    if (sortedArgs[i] < target) {
      sortedArgs.pop();
      sortedArgs[i] += 1;
    } else {
      sortedArgs.shift();
      count++;
    }
  }
  return count;
}
/**
 * Takes in two number parameters: a starting number, and an ending number. 
 * Prints all numbers from start to end without using loops.
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {string}
 */
function printWithoutLoops (start, end) {
  console.log(start);
  if (start < end) {
    printWithoutLoops((start + 1), end);
  }
  return '- Finished -';
}
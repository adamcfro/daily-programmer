/**
 * This function takes in a series of colors of wires and returns true if the
 * wires can be cut in sequential order without causing a 'bomb' to explode.
 * 
 * The rules for disarming are:
 *  If you cut a white cable you can't cut white or black cable.
 *  If you cut a red cable you have to cut a green one
 *  If you cut a black cable it is not allowed to cut a white, green or orange
 *  one
 *  If you cut a orange cable you should cut a red or black one
 *  If you cut a green one you have to cut a orange or white one
 *  If you cut a purple cable you can't cut a purple, green, orange or white
 *  cable
 * 
 * @param  {...any/String} args - A variable amount of strings
 * @returns {String} - Returns a string describing the outcome of wire cutting
 */
function defusal (...args) {
  let placeholder;
  let returnOutput;
  for (let arg of args) {
    if (placeholder === undefined) {
      placeholder = arg;
    } else if (placeholder === 'white') {
      if (arg === 'white' || arg === 'black') {
        returnOutput = 'BOOM!';
      }
    } else if (placeholder === 'red') {
      if (arg !== 'green') {
        returnOutput = 'BOOM!';
      }
    } else if (placeholder === 'black') {
      if (arg === 'white' || arg === 'green' || arg === 'orange') {
        returnOutput = 'BOOM!';
      }
    } else if (placeholder === 'orange') {
      if (arg !== 'red' && arg !== 'black') {
        returnOutput = 'BOOM!';
      }
    } else if (placeholder === 'green') {
      if (arg !== 'orange' && arg !== 'white') {
        returnOutput = 'BOOM!';
      }
    } else if (placeholder === 'purple') {
      if (arg === 'purple' || arg === 'green' || arg === 'orange' || arg === 'white') {
        returnOutput = 'BOOM!';
      }
    }
    placeholder = arg;
  }
  if (returnOutput) {
    return returnOutput;
  }
  return 'Bomb defused.';
}
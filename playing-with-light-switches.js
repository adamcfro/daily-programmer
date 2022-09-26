/**
 * This function takes in a number, lights, and an array of ranges.
 * All lights start in the off position, and are flipped every time a range
 * passes over the switch. Returns the state of the switches after all ranges
 * (inclusive) have been passed over.
 * 
 * @param {number} numLights - The number of light switches
 * @param  {...any/Array} args - A variable number of ranges in an array
 * @returns {string} - Returns a string representation of the state of switches
 */
function lightSwitches (numLights, ...args) {
  let lightStates = {};
  for (let i = 0; i < numLights; i++) {
    lightStates[i] = '.';
  }
  for (let arg of args) {
    if (arg[0] <= arg[1]) {
      for (let i = arg[0]; i <= arg[1]; i++) {
        lightStates[i] = lightStates[i] === 'X' ? '.' : 'X'; 
      }
    } else {
      for (let i = arg[0]; i >= arg[1]; i--) {
        lightStates[i] = lightStates[i] === 'X' ? '.' : 'X';
      }
    }
  }
  let lightArr = Object.values(lightStates);
  let finalState = '';
  for (let i = 0; i < lightArr.length; i++) {
    finalState += lightArr[i];
  }
  return finalState;
}
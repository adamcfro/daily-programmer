/**
 * This function takes in a string parameter and then determines if the
 * characters in the string describe a number or a string, returning
 * a description of the string as either a number or string.
 * 
 * @param {String} undeterminedInput - A string parameter made up of numbers
 * of letters
 * @returns {String} - Returns a string description of the parameter
 */
function maybeNumeric (undeterminedInput) {
  let type;
  undeterminedInput = String(undeterminedInput);
  for (let char of undeterminedInput) {
    if ((/[a-zA-Z]/).test(char)) {
      type = 'string';
    }
  }
  if (type === undefined) {
    type = 'number';
  }
  return `${undeterminedInput} (${type})`;
}
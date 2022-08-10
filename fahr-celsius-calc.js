/**
 * This function takes in a number parameter representing a temperature and
 * a string value telling if that temperature is in fahrenheit or celsius.
 * It then returns a string stating the starting temperature and system as well
 * as the newly converted temperature.
 * 
 * @param {number} num - A number representing temperature
 * @param {string} tempType - A string representing the temperature system
 * @returns {string} - Returns a string
 */
function fcCalculator (num, tempType) {
  let temperature;
  let convertedType = tempType === 'fahrenheit' ? 'celsius' : 'fahrenheit';
  // convert to celsius
  if (tempType === 'fahrenheit') {
    temperature = (num - 32) * (5 / 9);
  // convert to fahrenheit
  } else {
    temperature = (num * (9 / 5)) + 32;
  }
  return `${num} degrees ${tempType} is ${Math.round(temperature)} ` +
    `degrees ${convertedType}`;
}
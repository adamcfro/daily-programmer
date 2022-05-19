/**
 * This function takes in three numbers, then converts them into a hexidecimal
 * string, and returns the new hexidecimal string representation.
 * 
 * @param {Number} red - Red channel value parameter
 * @param {Number} green - Green channel value parameter
 * @param {Number} blue - Blue channel value parameter
 * @returns {String} - Returns a hexidecimal string
 */
function convertToHex (red, green, blue) {
  let hexColor = '#';
  for (let arg of arguments) {
    let hexString = (arg).toString(16).toUpperCase();
    if (hexString.length < 2) {
      hexString = '0' + hexString;
    }
    hexColor += hexString;
  }
  return hexColor;
}
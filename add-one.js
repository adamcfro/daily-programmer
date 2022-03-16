/**
 * Adds 1 to each digit in number parameter, converting 9's into 10.
 * Returns the modified number.
 * 
 * @param {Number} num - A number parameter
 * @returns {Number} - Returns a modified number
 */
function addOne (num) {
  let stringNum = num.toString();
  let newString = "";
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === "9") {
      newString += "10";
    } else {
      newString += parseInt(Number(stringNum[i]) + 1);
    }
  }
  return Number(newString);
}
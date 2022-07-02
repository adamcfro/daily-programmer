/**
 * ONLY RETURNS ONE POSSIBLE DECODING.
 * 
 * This function takes in a number parameter, converts the digits of the
 * number into its ascii letter equivalent, and returns one possible decoded
 * string.
 * 
 * @param {number} num - A number parameter
 * @returns {string} - Returns a decoded string
 */
function possibleDecodings (num) {
  num = String(num);
  let decoding = [];
  for (let i = 0; i < num.length; i++) {
    if (Number(num[i] + num[i + 1]) < 26) {
      decoding += String.fromCharCode(Number(num[i] + num[i + 1]) + 96);
      i++;
    } else {
      decoding += String.fromCharCode(Number(num[i]) + 96);
    }
  }
  return decoding;
}
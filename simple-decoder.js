/**
 * This function takes in a string and decodes it by subtracting 4 from each
 * ascii value, and adding the new value to a new string. 
 * Returns the decoded string.
 * 
 * @param {String} str - A string parameter
 * @returns {String} - Returns a decoded string
 */
function simpleDecoder (str) {
  let decodedStr = '';
  for (let i = 0; i < str.length; i++) {
    decodedStr += String.fromCharCode(str.charCodeAt(i) - 4);
  }
  return decodedStr;
}


/**
 * This posting for Daily Programmer asks challengers to decode a message
 * and then follow the instructions in the decoded message.
 * 
 * This function returns 'Hello World!!!'.
 */
function helloWorld () {
  return 'Hello World!!!';
}
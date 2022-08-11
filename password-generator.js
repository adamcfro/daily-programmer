/**
 * This function takes in a number parameter specifying the length of a
 * password to create, and returns a randomly generated password string.
 * 
 * @param {number} len - A number parameter specifying length of password
 * @returns {string} - Returns a newly created password string
 */
function passwordGenerator (len) {
  let newPassword = '';
  for (let i = 0; i < len; i++) {
    let randomNum = Math.floor(Math.random() * 122) + 1;
    while (randomNum < 48 || (randomNum > 57 && randomNum < 65) || (randomNum > 90 && randomNum < 97)) {
      randomNum = Math.floor(Math.random() * 122) + 1;
    }
    newPassword += String.fromCharCode(randomNum);
  }
  return newPassword;
}
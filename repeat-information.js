/**
 * This function asks a user to respond to a prompt asking for their info,
 * then returns that information in a string.
 * 
 * @returns {string} - Returns a string containing a user's info
 */
function repeatInformation () {
  let name = prompt('What is your name? ');
  let age = prompt('What is your age? ');
  let username = prompt('What is your username? ');
  let userInfo = `Your name is ${name}, you are ${age} years old,
  and your username is ${username}.`;
  return userInfo.replace(/[\n\r]/g, '');
}
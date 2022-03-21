/**
 * This function simulates dice rolls. The input is given in string form '3d6',
 * where the first number is the number of dice to roll, the 'd' stands for
 * dice, and the second number tells how many sides to the dice there are.
 * Returns the sum from the dice rolled.
 * 
 * @param {String} str - A string representing number of dice and their sides
 * @returns {Number} - Returns a sum of dice rolled
 */
function diceRoller (str) {
  let splitStr = str.split('d');
  let sum = 0;
  for (let i = 0; i < splitStr[0]; i++) {
    let roll = Math.floor(Math.random() * splitStr[1]) + 1;
    sum += roll;
  }
  return sum;
}
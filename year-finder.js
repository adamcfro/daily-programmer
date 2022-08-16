/**
 * This function takes in two numbers, one representing the month and the
 * other representing the day, and returns how many days into the year
 * the given date is.
 * 
 * @param {number} month - A number from 1-12
 * @param {number} day - A number from 1-31
 * @returns {number} - Returns a number representing the day of the year
 */
function yearFinder (month, day) {
  const months = [
    ['', 0],
    ['January', 31],
    ['February', 28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['October', 31],
    ['November', 30],
    ['December', 31]
  ];
  let dayNumber = 0;
  for (let i = 0; i < month; i++) {
    dayNumber += months[i][1];
  }
  dayNumber += day;
  return dayNumber;
}
/**
 * This function takes in a string representation of a 24-hour time and
 * translates it into words.
 * 
 * Format example: 
 *    input: 20:29
 *    output: "It's eight twenty-nine pm".
 * 
 * @param {string} str - A string parameter
 * @returns {string} - Returns a string representation of a time
 */
function talkingClock (str) {
  let hours = {
    00: 'twelve',
    01: 'one',
    02: 'two',
    03: 'three',
    04: 'four',
    05: 'five',
    06: 'six',
    07: 'seven',
    08: 'eight',
    09: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve'
  };
  let tens = {
    0: 'oh',
    2: 'twenty',
    3: 'thirty', 
    4: 'forty',
    5: 'fifty'
  };
  let teens = {
    10: 'ten', 
    11: 'eleven', 
    12: 'twelve', 
    13: 'thirteen', 
    14: 'fourteen', 
    15: 'fifteen', 
    16: 'sixteen', 
    17: 'seventeen', 
    18: 'eighteen', 
    19: 'nineteen'
  };
  let singles = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  let timeOutput = "It's ";
  let timeOfDay = '';
  str = str.split(':');
  // get hour
  if (Number(str[0]) > 12) {
    timeOfDay = 'pm';
    timeOutput += hours[Number(str[0] - 12)] + ' ';
  } else {
    timeOfDay = 'am';
    timeOutput += hours[Number(str[0])] + ' ';
  }
  // get teens
  if (Number(str[1][0]) === 1) {
    timeOutput += teens[Number(str[1])] + ' ';
  } else {
    timeOutput += tens[Number(str[1][0])] + ' ';
    // get singles
    if (str[1][1] > 0) {
      timeOutput += singles[Number(str[1][1])] + ' ';
    }
  }
  return timeOutput + timeOfDay;
}
/**
 * This function takes in a string date as input, and properly formats the
 * date to (YYYY-MM-DD). Returns the properly formatted date.
 * 
 * @param {string} deliveryDate - A string representation of a date
 * @returns {string} - Returns a newly formated string date
 */
function dateDilemma(deliveryDate) {
  let day = '';
  let month = '';
  let year = '';
  let splitDate = deliveryDate.split(/[-/\s]/);
  // YMD
  if (splitDate[0] > 12) {
    year = splitDate[0];
    month = splitDate[1];
    day = splitDate[2];
    format = 'YMD';
  // MDY
  } else {
    year = splitDate[2];
    month = splitDate[0];
    day = splitDate[1];
    format = 'MDY';
  }
  // format date
  year = year < 100 ? '20' + year : year;
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  return `${year}-${month}-${day}`;
}
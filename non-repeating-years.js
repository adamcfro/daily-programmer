/**
 * This function takes in a starting year and an ending year, and returns an 
 * array of all the years within that range that don't have repeating digits.
 * 
 * @param {number} start - First number parameter
 * @param {number} end - Second number parameter
 * @returns {Array} - Returns an array
 */
function nry (start, end) {
  let years = [];
  let currentYear = start;
  for (start = start; start <= end; start++) {
    currentYear = String(currentYear);
    let digits = [];
    for (let i = 0; i < currentYear.length; i++) {
      if (!digits.includes(currentYear[i])) {
        digits.push(currentYear[i]);
      } else {
        digits = [];
        currentYear++;
        break;
      }
      if (i + 1 === currentYear.length) {
        years.push(currentYear);
        digits = [];
        currentYear++;
      }
    }
  }
  return years;
}
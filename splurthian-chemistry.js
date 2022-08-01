/**
 * This function takes in two strings: the name of an element, and a symbol
 * representing the element. Returns true if both characters from the symbol
 * appear in order in the element name, false otherwise.
 * 
 * @param {string} element - The name of an element
 * @param {string} symbol - A string representation of an element symbol
 * @returns {boolean} - Returns a Boolean
 */
function splurthianChemistry (element, symbol) {
  element = element.toLowerCase();
  symbol = symbol.toLowerCase();
  for (let i = 0; i < element.length; i++) {
    if (element[i] === symbol[0]) {
      if (element.slice(i + 1).includes(symbol[1])) {
        return true;
      }
    }
  }
  return false;
}
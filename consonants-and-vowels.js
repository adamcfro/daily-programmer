/**
 * This function takes in a string consisting of c's (consonants) and
 * v's (vowels), and returns a new string where the c's from the input are 
 * replaced with random consonants, and v's are replaced with random vowels.
 * 
 * @param {String} str - A string of c's and v's
 * @returns {String} - Returns a new string
 */
function consonantsAndVowels (str) {
  str = str.toLowerCase();
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  let vowels = 'aeiou';
  let newWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'c') {
      newWord += consonants[Math.floor(Math.random() * 21)];
    } else {
      newWord += vowels[Math.floor(Math.random() * 5)];
    }
  }
  return newWord;
}
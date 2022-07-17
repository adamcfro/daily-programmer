/**
 * This function takes in two string parameters and then returns true if the
 * two strings contain the same exact string characters, excluding various
 * punctuations and spaces.
 * 
 * @param {string} string1 - First string parameter
 * @param {string} string2 - Second string paramter
 * @returns {string} - Returns a string describing validity of anagram
 */
function anagramDetector (string1, string2) {
  let isAnagram = `${string1} is an anagram of ${string2}`;
  let characters = {};
  let str1 = string1.toLowerCase().replace(/ /g, '');
  let str2 = string2.toLowerCase().replace(/ /g, '');
  for (let i = 0; i < str1.length; i++) {
    characters[str1[i]] = (characters[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    characters[str2[i]] = (characters[str2[i]] || 0) - 1;
  }
  for (const [key, value] of Object.entries(characters)) {
    if (value !== 0) {
      isAnagram = `${string1} is NOT an anagram of ${string2}`;
      break;
    }
  }
  return isAnagram;
}
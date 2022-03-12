
function romanNumeralComparison (str1, str2) {
  let values = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
  let count1 = 0;
  let count2 = 0;
  let splitString1 = str1.split("");
  let splitString2 = str2.split("");
  for (let i = 0; i < splitString1.length; i++) {
    let key = splitString1[i];
    count1 += values[key];
  }
  for (let i = 0; i < splitString2.length; i++) {
    let key = splitString2[i];
    count2 += values[key];
  }
  return count1 < count2;
}
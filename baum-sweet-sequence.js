/**
 * This function takes in a number parameter and then returns the Baum-Sweet
 * sequence up to that number.
 * 
 * The Baum-Sweet sequence takes the binary representation of a number, then,
 * if there is an odd length of successive zeroes anywhere in the number,
 * adds 0 to the sequence. Otherwise, a 1 is added to the sequence. 
 * 
 * @param {number} num - A number parameter
 * @returns {Array} - Returns an array of the Baum-Sweet sequence
 */
function baumSweetSequence (num) {
  let baumSweetArray = [];
  for (let i = 0; i < num; i++) {
    let oddLengthSequence = [];
    let count = 0;
    let binNum = i.toString(2);
    // check for zeroes
    for (let j = 0; j < binNum.length; j++) {
      if (binNum[j] === '0') {
        count++;
        if (binNum[j + 1] !== '0') {
          oddLengthSequence.push(count);
        }
      }
      // reach the end of binary number
      if (j === binNum.length - 1) {
        if (oddLengthSequence.length < 1) {
          baumSweetArray.push(1);
          break;
        }
        // there is an odd number sequence of zeroes
        for (let k = 0; k < oddLengthSequence.length; k++) {
          if (oddLengthSequence[k] % 2 === 1) {
            baumSweetArray.push(0);
            break;
          }
          // no odd number sequence of zeroes
          if (k === oddLengthSequence.length - 1) {
            baumSweetArray.push(1);
          }
        }
      }
    }
  }
  return baumSweetArray;
}
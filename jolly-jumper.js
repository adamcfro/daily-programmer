/**
 * A sequence of n > 0 integers is called a jolly jumper if the absolute values 
 * of the differences between the successive elements take on all possible 
 * values through n - 1.
 * Returns a string telling if the sequence is a Jolly Jumper.
 * 
 * @param {Array} arr - An array of numbers
 * @returns {String} - Returns a string
 */
function jollyJumper (arr) {
  let jumpArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    jumpArray.push(Math.abs(arr[i] - arr[i + 1]));
  }
  jumpArray.sort();
  for (let i = 0, j = 1; i < jumpArray.length; i++) {
    if (jumpArray[i] !== j) {
      return "NOT JOLLY"
    } else {
      j += 1;
    }
  }
  return "JOLLY"
}
/**
 * This function takes in a number as input and logs each number up to that
 * input in the console, except it logs 'FizzBuzz' if the number is divisible
 * by 3 and 5, 'Fizz' if the number is divisible by 3, and 'Buzz' if the
 * number is divisible by 5. Returns a string letting the user know the program
 * has finished.
 * 
 * @param {number} end - An inclusive number parameter
 * @returns {string} - Returns a string indicating the program has finished
 */
function fizzBuzz (end) {
  for (let i = 1; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  return '- Finished -';
}
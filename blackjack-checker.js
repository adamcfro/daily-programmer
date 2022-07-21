/**
 * This function takes in a variable number of string parameters representing
 * player's hands in Blackjack. Returns a string with the name of the winner
 * and their score.
 * 
 * NOT FINISHED
 * 
 * @param  {...string} args - A variable number of strings
 * @returns {string} - Returns a string representation of the winner and score
 */
function blackjackChecker (...args) {
  let highScore = 0;
  let winner;
  for (let arg of args) {
    arg = arg.replace(/\s/g, '');
    arg = arg.split(/[,:]/).filter(element => element);
    let name = arg[0];
    let total = [0, 0];
    for (let i = 1; i < arg.length; i++) {
      if (arg[i][0] === 'A') {
        total[0] += 1;
        total[1] += 11;
      } else if (arg[i].length > 2) {
        total[0] += 10;
        total[1] += 10;
      } else {
        total[0] += Number(arg[i][0]);
        total[1] += Number(arg[i][0]);
      }
    }
    let playerScore = Math.max.apply(Math, total.filter(function(x){
      return x <= 21
    }));
    if (playerScore > highScore) {
      highScore = playerScore;
      winner = `${name}: ${highScore}`;
    }
    total = [0, 0];
  }
  return winner;
}
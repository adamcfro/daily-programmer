/**
 * This function takes in a variable number of string parameters representing
 * player's hands in Blackjack. Returns a string with the name of the winner
 * and their score.
 * 
 * @param  {...string} args - A variable number of strings
 * @returns {string} - Returns a string representation of the winner and score
 */
 function blackjackChecker (...args) {
  let highScore = 0;
  let winner;
  for (let playerHand of args) {
    playerHand = playerHand.replace(/\s/g, '');
    playerHand = playerHand.split(/[,:]/).filter(element => element);
    let name = playerHand[0];
    let playerScore = 0;
    let aceCount = 0;
    for (let i = 1; i < playerHand.length; i++) {
      if (playerHand[i][0] === 'A') {
        playerScore += 11;
        aceCount++;
      } else if (playerHand[i].length > 2) {
        playerScore += 10;
      } else {
        playerScore += Number(playerHand[i][0]);
      }
    }
    while (playerScore > 21 && aceCount > 0) {
      playerScore -= 10;
      aceCount--;
    }
    if (playerScore > highScore) {
      highScore = playerScore;
      winner = `${name}: ${highScore}`;
    }
  }
  return winner;
}
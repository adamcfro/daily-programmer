/**
 * This function takes in a number parameter and simulates that many 6-sided
 * dice rolls, displaying a chart with the percentage that each number on the
 * die was rolled. Returns an object containing the results.
 * 
 * @param {*} numRolls - A number representing the amount of simulated dice rolls
 * @returns {object} - Returns an object containing the results of the simulated dice rolls
 */
function probabilityDistribution (numRolls) {
  let results = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  for (let i = 0; i < numRolls; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    results[roll] += 1;
  }
  let chart = 
  `# Rolls     1s    2s    3s    4s    5s    6s\n` +    
  `====================================================\n` +
  `${numRolls}        ` +    
  `| ${Math.floor(results[1] / numRolls * 100)}% ` +
  `| ${Math.floor(results[2] / numRolls * 100)}% ` +
  `| ${Math.floor(results[3] / numRolls * 100)}% ` +
  `| ${Math.floor(results[4] / numRolls * 100)}% ` +
  `| ${Math.floor(results[5] / numRolls * 100)}% ` +
  `| ${Math.floor(results[6] / numRolls * 100)}%\n` + 
  `====================================================`;
  console.log(chart);
  return results;
}
/**
 * This function takes in a variable amount of space delimited value pairs
 * in string format, consisting of an item and the cost of the item. 
 * Changes in price are tracked for each item and a string representing 
 * those price changes is returned.
 * 
 * @param  {String} args - A variable amount of space delimited value pairs
 * @returns {String} - Returns a string of items with price changes
 */
function nutsAndBolts (...args) {
  let inventory = {};
  let priceChanges = [];
  for (let i = 0; i < args.length; i++) {
    let item = args[i].split(' ');
    item[1] = Number(item[1]);
    if (item[0] in inventory) {
      if (inventory[item[0]] > item[1]) {
        priceChanges.push(`${item[0]} -${inventory[item[0]] - item[1]}`);
      } else if (inventory[item[0]] < item[1]) {
        priceChanges.push(`${item[0]} +${item[1] - inventory[item[0]]}`);
      }
    } else {
      inventory[item[0]] = (inventory[item[0]] || 0) + item[1];
    }
  }
  return priceChanges.toString();
}
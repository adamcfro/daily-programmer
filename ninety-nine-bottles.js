/**
 * This function prints to the console the lyrics to 99 Bottles of Beer.
 * It returns a string designating the end of the function.
 * 
 * @returns {string} - Returns a string
 */
function ninetyNineBottles () {
  let bottles = 99;
  let ending = 
  `1 bottle of beer on the wall,
  1 bottle of beer...
  Take it down and pass it around,
  No more bottles of beer on the wall.`
  while (bottles > 1) {
    let chorus = 
      `${bottles} bottles of beer on the wall,
      ${bottles} bottles of beer...
      Take one down and pass it around,
      ${bottles - 1} bottles of beer on the wall.`
    console.log(chorus);
    bottles--;
  }
  console.log(ending);
  return "The end!";
}
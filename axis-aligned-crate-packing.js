/**
 * Given a crate with an x and y size, and a box with an x and y size,
 * determine how many boxes can fit into a single crate if they have to
 * be placed so that the x-axis of the boxes is aligned with the x-axis
 * of the crate, and the y-axis of the boxes is aligned with the y-axis of the crate.
 * EX: If a crate is 25 by 18 and the boxes are 6 by 5, then 12 boxes will fit.
 * Returns the number of boxes that will fit in the given crate.
 * 
 * @param {Number} crateX - The size of the x-axis of the crate
 * @param {Number} crateY - The size of the y-axis of the crate
 * @param {Number} boxX - The size of the x-axis of the box
 * @param {Number} boxY - The size of the y-axis of the box
 * @returns {Number} - Returns how many boxes will fit in the crate
 */
function cratePacking (crateX, crateY, boxX, boxY) {
  let xAxis = Math.trunc(crateX / boxX);
  let yAxis = Math.trunc(crateY / boxY);
  return xAxis * yAxis;
}
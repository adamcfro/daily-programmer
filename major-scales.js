/**
 * This function takes in a scale and a note from the movable do solfege
 * system (Do, Re, Mi, Fa, So, La, Ti), and returns the corresponding
 * note of the scale.
 * 
 * @param {String} scale - The name of a scale
 * @param {String} note - The name of a note
 * @returns {String} - Returns a string representation of a musical note
 */
function noteFinder (scale, note) {
  let chromaticScale = 
    ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let solfegeNotes = 
    {'Do': 0, 'Re': 2, 'Mi': 4, 'Fa': 5, 'So': 7, 'La': 9, 'Ti': 11};
  let notePosition = solfegeNotes[note] + chromaticScale.indexOf(scale);
  if (notePosition > 12) {
    notePosition -= 12;
  }
  return chromaticScale[notePosition];
}
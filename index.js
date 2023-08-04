/**
 * This function randomly selects a word from the array ["Rock", "Paper", "Scissors"].
 * It uses the Math.random function to generate a random index for the array, and then
 * returns the word at that index. This simulates the computer's choice in a game.
 *
 * @returns {string} The word that the computer has randomly selected ("Rock", "Paper", or "Scissors").
 */
function computerPlay() {
  const words = ["Rock", "Paper", "Scissors"];
  const computerChoiceWord = Math.floor(Math.random() * words.length);
  return words[computerChoiceWord];
}

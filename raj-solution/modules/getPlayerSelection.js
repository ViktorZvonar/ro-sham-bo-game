export function getPlayerSelection() {
  const words = ["Rock", "Paper", "Scissors"];
  let playerSelection = prompt(`Choose one of these word: ` + words.join(", "));

  const inputWords = playerSelection.toLowerCase();

  // Check if the user's input is a valid selection
  if (words.map((word) => word.toLowerCase()).includes(inputWords)) {
    console.log("You selected: " + playerSelection);
    return playerSelection;
  } else {
    console.error(
      "Invalid selection. Please choose the word from the following: " +
        words.join(", "),
    );
    return getPlayerSelection();
  }
}

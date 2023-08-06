export function handlePlayerSelection() {
  while (true) {
    const playerSelection = prompt(
      "Enter your choice: Rock, Paper, or Scissors?",
    );

    if (playerSelection === null) {
      const leaveGame = confirm(
        "If you leave, the mankind will be ASHED. Boo!",
      );
      if (leaveGame) {
        alert("You left the Game... See you in hell!");
        return null;
      }
    } else {
      const lowercasedSelection = playerSelection.toLowerCase();
      if (
        lowercasedSelection !== "rock" &&
        lowercasedSelection !== "scissors" &&
        lowercasedSelection !== "paper"
      ) {
        alert("Ha-ha! Wrong choice! Try again...");
      } else {
        return lowercasedSelection;
      }
    }
  }
}

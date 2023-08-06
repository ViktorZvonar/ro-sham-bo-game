export function replayGame(game) {
  const playAgain = prompt("Want to play again? (yes or no)").toLowerCase();
  if (playAgain === "yes") {
    game();
  } else if (playAgain === "no") {
    alert("See you, sweety !!!");
    console.clear();
    return;
  } else {
    alert("You must decide! Yes or no...");
    replayGame();
  }
}

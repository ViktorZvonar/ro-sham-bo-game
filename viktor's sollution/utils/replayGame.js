export function replayGame(game) {
  console.clear();
  const playAgain = prompt("Want to play again? (yes or no)").toLowerCase();
  if (playAgain === "yes") {
    game();
  } else if (playAgain === "no") {
    alert("See you, sweety !!!");
    return;
  } else {
    alert("You must decide! Yes or no...");
    replayGame(game);
  }
}

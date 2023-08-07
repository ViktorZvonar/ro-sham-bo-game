export function replayGame(game) {
  const playAgain = prompt("Want to play again? (yes or no)").toLowerCase();
  if (playAgain === "yes") {
    console.clear();
    game();
  } else if (playAgain === "no") {
    console.clear();
    alert("See you, sweety !!!");
    return;
  } else {
    alert("You must decide! Yes or no...");
    replayGame(game);
  }
}

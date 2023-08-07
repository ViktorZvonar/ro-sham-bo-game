import { ui } from "./ui.js";

export function replayGame(game) {
  const playAgain = prompt("Want to play again? (yes or no)")?.toLowerCase();
  if (playAgain === "yes") game();
  else if (playAgain === "no") return ui.end();
  else {
    ui.yesOrNo();
    replayGame(game);
  }
}

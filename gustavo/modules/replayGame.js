import { ui } from "./ui.js";

export function replayGame(game) {
  const playAgain = ui.getPlayerPlayAgainInput()?.toLowerCase();
  if (playAgain === "yes") game();
  else if (playAgain === "no") return ui.end();
  else {
    ui.alertYesOrNo();
    replayGame(game);
  }
}

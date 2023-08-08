import { ui } from "./ui.js";
import { RESULTS } from "./constants.js";
import { scoreboard } from "./scoreboard.js";
import { replayGame } from "./replayGame.js";

export function finishGame(game) {
  const finalResult = scoreboard.getFinalResult();

  if (finalResult === RESULTS.WIN) {
    ui.logGameWin();
  } else if (finalResult === RESULTS.DRAW) {
    ui.logGameDraw();
  } else if (finalResult === RESULTS.LOSS) {
    ui.logGameLoss();
  }

  replayGame(game);
}

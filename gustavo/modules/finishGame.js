import { UI } from "./UI.js";
import { RESULTS } from "./constants.js";
import { scoreboard } from "./scoreboard.js";

export function finishGame() {
  const finalResult = scoreboard.getFinalResult();

  if (finalResult === RESULTS.WIN) {
    UI.gameWin();
  } else if (finalResult === RESULTS.DRAW) {
    UI.gameDraw();
  } else if (finalResult === RESULTS.LOSS) {
    UI.gameLoss();
  }
}

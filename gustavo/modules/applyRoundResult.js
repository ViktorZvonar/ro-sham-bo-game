import { ui } from "./ui.js";
import { RESULTS } from "./constants.js";
import { scoreboard } from "./scoreboard.js";

export function applyRoundResult(
  roundResult,
  playerSelection,
  computerSelection,
) {
  if (roundResult === RESULTS.WIN) {
    scoreboard.countRoundWin();
    ui.logRoundWin(playerSelection, computerSelection, scoreboard);
  } else if (roundResult === RESULTS.DRAW) {
    scoreboard.countRoundDraw(playerSelection);
    ui.logRoundDraw(playerSelection, scoreboard);
  } else if (roundResult === RESULTS.LOSS) {
    scoreboard.countRoundLoss(playerSelection, computerSelection);
    ui.logRoundLoss(playerSelection, computerSelection, scoreboard);
  }

  scoreboard.countRound();
}

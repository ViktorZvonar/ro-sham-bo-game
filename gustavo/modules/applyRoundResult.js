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
    ui.roundWin(playerSelection, computerSelection, scoreboard);
  } else if (roundResult === RESULTS.DRAW) {
    scoreboard.countRoundDraw(playerSelection);
    ui.roundDraw(playerSelection, scoreboard);
  } else if (roundResult === RESULTS.LOSS) {
    scoreboard.countRoundLoss(playerSelection, computerSelection);
    ui.roundLoss(playerSelection, computerSelection, scoreboard);
  }

  scoreboard.countRound();
}

import { UI } from "./UI.js";
import { RESULTS } from "./constants.js";

export function applyRoundResult(
  roundResult,
  playerSelection,
  computerSelection,
  scoreboard,
) {
  if (roundResult === RESULTS.WIN) {
    scoreboard.countRoundWin();
    UI.roundWin(playerSelection, computerSelection, scoreboard);
  } else if (roundResult === RESULTS.DRAW) {
    scoreboard.countRoundDraw(playerSelection);
    UI.roundDraw(playerSelection, scoreboard);
  } else if (roundResult === RESULTS.LOSS) {
    scoreboard.countRoundLoss(playerSelection, computerSelection);
    UI.roundLoss(playerSelection, computerSelection, scoreboard);
  }

  scoreboard.countRound();
}

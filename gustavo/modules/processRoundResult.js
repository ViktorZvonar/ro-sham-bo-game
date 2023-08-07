import { UI } from "./UI.js";
import { RESULTS } from "./constants.js";

export function processRoundResult(
  roundResult,
  playerSelection,
  computerSelection,
  scoreboard,
) {
  if (roundResult === RESULTS.WIN) {
    scoreboard.countWin();
    UI.win(playerSelection, computerSelection, scoreboard);
  } else if (roundResult === RESULTS.LOSS) {
    scoreboard.countLoss(playerSelection, computerSelection);
    UI.loss(playerSelection, computerSelection, scoreboard);
  } else if (roundResult === RESULTS.DRAW) {
    scoreboard.countDraw(playerSelection);
    UI.draw(playerSelection, scoreboard);
  }

  scoreboard.countRound();
}

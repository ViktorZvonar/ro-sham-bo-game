import { calculateRoundResult } from "./calculateRoundResult.js";
import { processRoundResult } from "./processRoundResult.js";

export function playRound(playerSelection, computerSelection, scoreboard) {
  const roundResult = calculateRoundResult(playerSelection, computerSelection);
  processRoundResult(
    roundResult,
    playerSelection,
    computerSelection,
    scoreboard,
  );
}

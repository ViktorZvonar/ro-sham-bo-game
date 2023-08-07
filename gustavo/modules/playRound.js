import { calculateRoundResult } from "./calculateRoundResult.js";
import { applyRoundResult } from "./applyRoundResult.js";

export function playRound(playerSelection, computerSelection, scoreboard) {
  const roundResult = calculateRoundResult(playerSelection, computerSelection);
  applyRoundResult(roundResult, playerSelection, computerSelection, scoreboard);
}

import { MOVES, RESULTS } from "./constants.js";

export function calculateRoundResult(playerSelection, computerSelection) {
  const MOVE_INDEXES = {
    [MOVES.ROCK]: 0,
    [MOVES.PAPER]: 1,
    [MOVES.SCISSORS]: 2,
  };

  const POSSIBLE_RESULTS = [
    /*              Rock          Paper          Scissors */
    /* Rock     */ [RESULTS.DRAW, RESULTS.LOSS, RESULTS.WIN],
    /* Paper    */ [RESULTS.WIN, RESULTS.DRAW, RESULTS.LOSS],
    /* Scissors */ [RESULTS.LOSS, RESULTS.WIN, RESULTS.DRAW],
  ];

  const playerSelectionIndex = MOVE_INDEXES[playerSelection];
  const computerSelectionIndex = MOVE_INDEXES[computerSelection];

  return POSSIBLE_RESULTS[playerSelectionIndex][computerSelectionIndex];
}

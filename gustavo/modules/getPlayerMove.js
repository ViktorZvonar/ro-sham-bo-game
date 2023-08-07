import { MOVES } from "./constants.js";

export function getPlayerMove(playerInput) {
  const MOVE_ABBREVIATIONS = {
    R: MOVES.ROCK,
    P: MOVES.PAPER,
    S: MOVES.SCISSORS,
  };

  const upperCasePlayerInput = playerInput.toUpperCase();

  const isValidMove = !!MOVES[upperCasePlayerInput];
  const isValidAbbreviation = !!MOVE_ABBREVIATIONS[upperCasePlayerInput];

  if (isValidMove) return MOVES[upperCasePlayerInput];
  else if (isValidAbbreviation) return MOVE_ABBREVIATIONS[upperCasePlayerInput];
  return null;
}

import { MOVES } from "./constants.js";

export function getPlayerMove(playerInput) {
  const upperCasePlayerInput = playerInput.toUpperCase();
  return MOVES[upperCasePlayerInput] ?? null;
}

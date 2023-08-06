import { MOVES } from "./constants.js";

export function isValidInput(input) {
  return !!MOVES[input.toUpperCase()];
}

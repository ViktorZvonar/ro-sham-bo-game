import { MOVES } from "./constants.js";

export function computerPlay() {
  const movesArray = Object.values(MOVES);
  const ramdomIndex = Math.floor(Math.random() * movesArray.length);
  return movesArray[ramdomIndex];
}

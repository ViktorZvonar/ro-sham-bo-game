import { MOVES } from "./constants.js";

export function computerPlay() {
  const movesArray = Object.values(MOVES);
  const randomIndex = Math.floor(Math.random() * movesArray.length);
  return movesArray[randomIndex];
}

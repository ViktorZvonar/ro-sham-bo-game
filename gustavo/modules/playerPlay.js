import { UI } from "./UI.js";
import { getPlayerMove } from "./getPlayerMove.js";

export function playerPlay() {
  while (true) {
    const playerInput = UI.getPlayerInput();
    if (typeof playerInput !== "string") return null;

    const playerMove = getPlayerMove(playerInput);
    if (playerMove) return playerMove;

    UI.wrongInput();
  }
}

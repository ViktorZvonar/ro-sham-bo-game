import { UI } from "./UI.js";
import { getPlayerMove } from "./getPlayerMove.js";

export function playerPlay(scoreboard) {
  while (true) {
    const playerInput = UI.getPlayerInput();
    if (!playerInput) return null;

    const playerMove = getPlayerMove(playerInput);
    if (playerMove) return playerMove;

    UI.wrongInput(scoreboard);
  }
}

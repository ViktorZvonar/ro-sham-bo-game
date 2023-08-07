import { ui } from "./ui.js";
import { getPlayerMove } from "./getPlayerMove.js";

export function playerPlay() {
  while (true) {
    const playerInput = ui.getPlayerInput();
    if (typeof playerInput !== "string") return null;

    const playerMove = getPlayerMove(playerInput);
    if (playerMove) return playerMove;

    ui.wrongInput();
  }
}

import { UI } from "./UI.js";
import { isValidInput } from "./isValidInput.js";

export function playerPlay() {
  while (true) {
    const playerInput = prompt(
      `What's your move?\nChoose between rock, paper and scissors.`,
    );

    if (typeof playerInput !== "string") return null;
    else if (isValidInput(playerInput)) return playerInput.toUpperCase();

    UI.wrongInput();
  }
}

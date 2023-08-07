import { playerPlay } from "./playerPlay.js";
import { computerPlay } from "./computerPlay.js";
import { UI } from "./UI.js";
import { playRound } from "./playRound.js";
import { finishGame } from "./finishGame.js";
import { scoreboard } from "./scoreboard.js";

export function game() {
  scoreboard.reset();
  UI.header();

  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    if (!playerSelection) {
      UI.exit();
      return 0;
    }

    playRound(playerSelection, computerSelection);
  }

  finishGame();
  return 0;
}

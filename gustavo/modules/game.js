import { playerPlay } from "./playerPlay.js";
import { computerPlay } from "./computerPlay.js";
import { ui } from "./ui.js";
import { playRound } from "./playRound.js";
import { finishGame } from "./finishGame.js";
import { scoreboard } from "./scoreboard.js";
import { leaveGame } from "./leaveGame.js";

export function game() {
  scoreboard.reset();
  ui.logHeader();

  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    const computerSelection = computerPlay();

    while (!playerSelection) {
      if (leaveGame()) return 0;
      playerSelection = playerPlay();
    }

    playRound(playerSelection, computerSelection);
  }

  finishGame(game);
  return 0;
}

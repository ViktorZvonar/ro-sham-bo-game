import { makeScoreboard } from "./makeScoreboard.js";
import { playerPlay } from "./playerPlay.js";
import { computerPlay } from "./computerPlay.js";
import { UI } from "./UI.js";
import { playRound } from "./playRound.js";

export function game() {
  UI.start();
  const scoreboard = makeScoreboard();

  while (scoreboard.wins < 5) {
    UI.round(scoreboard);

    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    if (!playerSelection) {
      UI.exit();
      return 0;
    }

    playRound(playerSelection, computerSelection, scoreboard);

    UI.score(scoreboard);
  }

  UI.finish();
  return 0;
}

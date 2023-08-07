import { makeScoreboard } from "./makeScoreboard.js";
import { playerPlay } from "./playerPlay.js";
import { computerPlay } from "./computerPlay.js";
import { UI } from "./UI.js";
import { playRound } from "./playRound.js";

export function game() {
  const scoreboard = makeScoreboard();
  UI.header(scoreboard);

  while (scoreboard.wins < 5) {
    const playerSelection = playerPlay(scoreboard);
    const computerSelection = computerPlay();

    if (!playerSelection) {
      UI.exit();
      return 0;
    }

    playRound(playerSelection, computerSelection, scoreboard);
  }

  UI.finish();
  return 0;
}

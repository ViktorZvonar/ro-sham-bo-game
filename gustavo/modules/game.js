import { makeScoreboard } from "./makeScoreboard.js";
import { playerPlay } from "./playerPlay.js";
import { computerPlay } from "./computerPlay.js";
import { UI } from "./UI.js";
import { playRound } from "./playRound.js";
import { replayGame } from "./replayGame.js";

export function game() {
  const scoreboard = makeScoreboard();
  UI.header(scoreboard);

  while (!scoreboard.isFinished()) {
    const playerSelection = playerPlay(scoreboard);
    const computerSelection = computerPlay();

    if (!playerSelection) {
      UI.exit();
      return 0;
    }

    playRound(playerSelection, computerSelection, scoreboard);
  }

  UI.finish();
  replayGame(game);
  return 0;
}

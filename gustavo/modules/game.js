import { makeScoreboard } from "./makeScoreboard.js";
import { playerPlay } from "./playerPlay.js";
import { computerPlay } from "./computerPlay.js";
import { UI } from "./UI.js";
import { playRound } from "./playRound.js";
import { finishGame } from "./finishGame.js";
import { replayGame } from "./replayGame.js";
import { leaveGame } from "./leaveGame.js";

export function game() {
  const scoreboard = makeScoreboard();
  UI.header(scoreboard);

  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay(scoreboard);
    const computerSelection = computerPlay();

    if (!playerSelection) {
      // leaveGame(); 
      UI.exit();
      return 0;
    }

    playRound(playerSelection, computerSelection, scoreboard);
  }

  finishGame(scoreboard);
  replayGame(game);

  return 0;
}

import { computerPlay } from "./utils/computerPlay.js";
import { playRound } from "./utils/playRound.js";
import { replayGame } from "./utils/replayGame.js";
import { welcomeMessage } from "./utils/welcomeMessage.js";
import { handlePlayerSelection } from "./utils/handlePlayerSelection.js";
import { outcomes } from "./utils/outcomes.js";
import { displayFinalResult } from "./utils/displayFinalResult.js";

function game() {
  console.clear();
  welcomeMessage();

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = handlePlayerSelection();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}: ${result}`);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  outcomes();
  displayFinalResult(playerScore, computerScore);
  replayGame(game);
}

game();

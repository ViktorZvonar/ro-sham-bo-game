import { computerPlay } from "./utils/computerPlay.js";
import { playRound } from "./utils/playRound.js";
import { replayGame } from "./utils/replayGame.js";
import { welcomeMessage } from "./utils/welcomeMessage.js";
import { outcomes } from "./utils/outcomes.js";

function game() {
  welcomeMessage();

  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;

  for (let i = 0; i < 5; i++) {
    while (true) {
      playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors?");

      if (playerSelection === null) {
        const leaveGame = confirm(
          "If you leave, the mankind will be ASHED. Boo!",
        );
        if (leaveGame) {
          alert("You left the Game... See you in hell!");
          return;
        }
      } else {
        playerSelection = playerSelection.toLowerCase();
        if (
          playerSelection !== "rock" &&
          playerSelection !== "scissors" &&
          playerSelection !== "paper"
        ) {
          alert("Ha-ha! Wrong choice! Try again...");
        } else {
          break;
        }
      }
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}: ${result}`);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  outcomes(playerScore, computerScore);
  replayGame(game);
}

window.game = game;

import GameRules from "./gameRules.js";
import { getPlayerSelection } from "./getPlayerSelection.js";
import { computerPlay } from "./computerPlay.js";

export default function PlayGame() {
  GameRules();
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      alert("Draw");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      alert("You win!");
    } else {
      alert("You lose!");
    }
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    for (let i = 0; i < 5; i++) {
      alert(`Round: ${round++}`);
      const playerSelection = getPlayerSelection().toLowerCase();
      const computerSelection = computerPlay().toLowerCase();

      alert("Computer selected: " + computerSelection);
      playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
      playerScore++;
      alert("You are the winner");
    } else {
      computerScore++;
      alert("Computer is the winner");
    }
    alert("Your final score: " + playerScore);
    alert("Computer's final score: " + computerScore);
  }
  game();
  alert(
    "Do you want to play again refresh the page, else turn off your computer",
  );
  console.clear();
}

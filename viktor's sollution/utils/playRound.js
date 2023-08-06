export function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "This round is a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win this round! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  } else {
    return `You lose this round! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}`;
  }
}

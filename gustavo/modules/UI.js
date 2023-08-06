export const UI = {
  start() {
    console.log(`\n\n\n\n\n\n\n\n\n
  Welcome! You are playing "Rock-Paper-Scissors".
  
  Rules:
  Use the cancel button to exit the game.
  Use the alert box to input "rock", "paper" or "scissors".
  Then click "OK" and your input will be compared against your enemy's.
  You win if you beat them 5 times.
  
  Remember:
  Rock beats Scissors, but loses against Paper;
  Paper beats Rock, but loses against Scissors;
  Scissors beats Paper, but loses against Rock.
  
  Good luck!
  \n\n\n`);
  },

  exit() {
    console.log("You exited the game.");
  },

  round(scoreboard) {
    console.log(`ROUND ${scoreboard.rounds}`);
  },

  wrongInput() {
    console.log(
      'Wrong input. You have to choose between "rock", "paper" and "scissors".',
    );
  },

  win(playerSelection, computerSelection) {
    console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
  },

  loss(playerSelection, computerSelection) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  },

  draw(selection) {
    console.log(`It's a draw! Both chose ${selection}`);
  },

  score(scoreboard) {
    console.log(`Scoreboard:
          - Wins: ${scoreboard.wins}
          - Draws: ${scoreboard.draws}
          - Losses: ${scoreboard.losses}`);
    console.log("\n\n");
  },

  finish() {
    console.log("You have finished the game. Congratulations!");
  },
};

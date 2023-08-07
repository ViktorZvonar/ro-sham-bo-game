export const UI = {
  header(scoreboard) {
    console.clear();

    console.log();

    console.log(
      "%c\n\n\n\n\n\nROCK PAPER SCISSORS",
      "font-size: 32px; font-weight: bold;",
      `\n\nRules:
- Use the cancel button to exit the game.
- Use the alert box to input "rock", "paper" or "scissors". Then click "OK" and your input will be compared against your opponent's.
- You win if you beat them 5 times.

Remember:
- Rock beats Scissors, but loses against Paper.
- Paper beats Rock, but loses against Scissors.
- Scissors beats Paper, but loses against Rock.

Shortcuts:
- "r" = "rock".
- "p" = "paper".
- "s" = "scissors".`,
    );

    console.log("\n");

    console.log(
      "%cSCOREBOARD",
      "font-size: 20px; font-weight: bold;",
      `\n\nWins: ${scoreboard.wins}
Draws: ${scoreboard.draws}
Losses: ${scoreboard.losses}`,
    );

    console.log("\n");

    console.log(
      `%cROUND ${scoreboard.rounds}`,
      "font-size: 20px; font-weight: bold;",
    );
  },

  exit() {
    console.clear();
    console.log("You exited the game.");
  },

  getPlayerInput() {
    return prompt("What's your move?");
  },

  wrongInput(scoreboard) {
    this.header(scoreboard);
    console.log(
      `⚠️ Wrong input. Try again.                                   
⚠️ You have to choose between "rock", "paper" and "scissors".
⚠️ Or use the shortcuts "r", "p" and "s".`,
    );
  },

  win(playerSelection, computerSelection, scoreboard) {
    this.header(scoreboard);
    console.log(
      `%cYou won! ${playerSelection} beats ${computerSelection}.`,
      "color: #03fc35;",
    );
  },

  draw(selection, scoreboard) {
    this.header(scoreboard);
    console.log(`%cIt's a draw! Both chose ${selection}.`, "color: #fcba03;");
  },

  loss(playerSelection, computerSelection, scoreboard) {
    this.header(scoreboard);
    console.log(
      `%cYou lost! ${computerSelection} beats ${playerSelection}.`,
      "color: #ff6363;",
    );
  },

  finish() {
    console.log(
      "%cYou have finished the game. Congratulations!",
      "background-image: linear-gradient(to left, #a8ff78, #78ffd6); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
  },
};

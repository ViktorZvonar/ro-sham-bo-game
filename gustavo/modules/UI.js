import { scoreboard } from "./scoreboard.js";

export const ui = {
  header() {
    console.clear();
    console.log(
      "%c\n\n\n\n\n\nROCK PAPER SCISSORS",
      "font-size: 32px; font-weight: bold;",
      `\n\nRules:
- Use the cancel button to exit the game (NOT recommended).
- Use the alert box to input "rock", "paper" or "scissors". Then click "OK" and your input will be compared against your opponent's.
- There are five rounds. You win the game if you win more rounds than your opponent.

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

  getPlayerInput() {
    return prompt("What's your move?");
  },

  getPlayerExitConfirmation() {
    return confirm("If you leave, mankind will be ASHED. Boo!");
  },

  wrongInput() {
    this.header();
    console.log(
      `⚠️ Wrong input. Try again.                                   
⚠️ You have to choose between "rock", "paper" and "scissors".
⚠️ Or use the shortcuts "r", "p" and "s".`,
    );
  },

  roundWin(playerSelection, computerSelection) {
    this.header();
    console.log(
      `%cYou won! ${playerSelection} beats ${computerSelection}.`,
      "color: #03fc35;",
    );
  },

  roundDraw(selection) {
    this.header();
    console.log(`%cIt's a draw! Both chose ${selection}.`, "color: #fcba03;");
  },

  roundLoss(playerSelection, computerSelection) {
    this.header();
    console.log(
      `%cYou lost! ${computerSelection} beats ${playerSelection}.`,
      "color: #ff6363;",
    );
  },

  gameWin() {
    console.log(
      "%cYou won the game. Congratulations!",
      "background-image: linear-gradient(to left, #a8ff78, #78ffd6); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
  },

  gameDraw() {
    console.log(
      "%cOh, it's a draw. Boring...",
      "background-image: linear-gradient(to left, #fdc830, #f37335); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
  },

  gameLoss() {
    console.log(
      "%cYou lost the game. That's bad.",
      "background-image: linear-gradient(to left, #ff416C, #ff4b2b); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
  },

  exit() {
    console.clear();
    console.log(`You exited the game.
Call "game()" to play again.`);
  },

  leave() {
    this.exit();
    alert("You left the Game... See you in hell!");
  },

  end() {
    this.exit();
    alert("See you, sweety !!!");
  },

  yesOrNo() {
    alert("You must decide! Yes or no...");
  },
};

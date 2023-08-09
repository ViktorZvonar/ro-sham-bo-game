import { scoreboard } from "./scoreboard.js";

export const ui = {
  logStartScreen() {
    console.log(`
    |oooo|        |oooo|
    |oooo| .----. |oooo|
    |Oooo|/\\_||_/\\|oooO|
    '----' / __ \\ '----'
    ,/ |#|/\\/__\\/\\|#| \\,
   /  \\|#|| |/\\| ||#|/  \\
  / \\_/|_|| |/\\| ||_|\\_/ \\
 |_\\/    o\\=----=/o    \\/_|
 <_>      |=\\__/=|      <_>
 <_>      |------|      <_>
 | |   ___|======|___   | |
//\\\\  / |O|======|O| \\  //\\\\
|  |  | |O+------+O| |  |  |
|\\/|  \\_+/        \\+_/  |\\/|
\\__/  _|||        |||_  \\__/
      | ||        || |
     [==|]        [|==]
     [===]        [===]
      >_<          >_<
     || ||        || ||
     || ||        || ||
     || ||        || ||
   __|\\_/|__    __|\\_/|__
  /___n_n___\\  /___n_n___\\  
`);
    console.log(
      `%c
Hello, human! Let's play a game.

Call "game()" to start.
`,
      "font-size: 16px; font-weight-bold;",
    );
  },

  welcome() {
    alert(
      "Welcome! Human! You're gonna play agaist the evil AI - The Destroyer",
    );
    alert("If you win, the mankind WILL live... If not, God be with you!!!");
  },

  logHeader() {
    console.clear();
    console.log(
      "%c\n\n\n\n\n\nROCK PAPER SCISSORS",
      "font-size: 32px; font-weight: bold;",
      `\n\nRules:
- Use the cancel button to exit the game.
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
      `\n\n🟩 Wins: ${scoreboard.wins}
🟧 Draws: ${scoreboard.draws}
🟥 Losses: ${scoreboard.losses}`,
    );
    console.log("\n");
    console.log(
      `%cROUND ${scoreboard.rounds}`,
      "font-size: 20px; font-weight: bold;",
    );
  },

  logWrongInput() {
    this.logHeader();
    console.log(
      `⚠️ Wrong input. Try again.                                   
⚠️ You have to choose between "rock", "paper" and "scissors".
⚠️ Or use the shortcuts "r", "p" and "s".`,
    );
    alert("Ha-ha, you're doing it all wrong...");
  },

  logRoundWin(playerSelection, computerSelection) {
    this.logHeader();
    console.log(
      `%cYou won! ${playerSelection} beats ${computerSelection}.`,
      "color: #03fc35; background-color: #000000; padding: 5px 5px;",
    );
  },

  logRoundDraw(selection) {
    this.logHeader();
    console.log(
      `%cIt's a draw! Both chose ${selection}.`,
      "color: #fcba03; background-color: #000000; padding: 5px 5px;",
    );
  },

  logRoundLoss(playerSelection, computerSelection) {
    this.logHeader();
    console.log(
      `%cYou lost! ${computerSelection} beats ${playerSelection}.`,
      "color: #ff6363; background-color: #000000; padding: 5px 5px;",
    );
  },

  logGameWin() {
    console.log(
      "%cYou won the game. Congrats!",
      "background-image: linear-gradient(to left, #a8ff78, #78ffd6); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
    alert("The world is saved! Good job!");
  },

  logGameDraw() {
    console.log(
      "%cOh, it's a draw. Boring...",
      "background-image: linear-gradient(to left, #fdc830, #f37335); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
    alert("You cannot escape the destiny!!!");
  },

  logGameLoss() {
    console.log(
      "%cYou lost the game. That's bad.",
      "background-image: linear-gradient(to left, #ff416C, #ff4b2b); color: #000000; font-size: 18px; font-weight: bold; padding: 16px;",
    );
    alert("Mankind is doomed!!!");
  },

  logExit() {
    console.clear();
    this.logStartScreen();
  },

  logLeave() {
    this.logExit();
    alert("You left the Game... See you in hell!");
  },

  logEnd() {
    this.logExit();
    alert("See you, sweety !!!");
  },

  getPlayerMoveInput() {
    return prompt("What's your move?");
  },

  getPlayerLeaveConfirmation() {
    return confirm("If you leave, mankind will be ASHED. Boo!");
  },

  getPlayerPlayAgainInput() {
    return prompt("Want to play again? (yes or no)");
  },

  alertYesOrNo() {
    alert("You must decide! Yes or no...");
  },
};

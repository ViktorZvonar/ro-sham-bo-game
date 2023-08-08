import { RESULTS } from "./constants.js";

export const scoreboard = {
  wins: 0,
  draws: 0,
  losses: 0,
  rounds: 1,

  reset() {
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.rounds = 1;
  },

  countRoundWin() {
    this.wins++;
  },

  countRoundLoss() {
    this.losses++;
  },

  countRoundDraw() {
    this.draws++;
  },

  countRound() {
    this.rounds++;
  },

  getFinalResult() {
    const netScore = this.wins - this.losses;
    if (netScore > 0) return RESULTS.WIN;
    else if (netScore === 0) return RESULTS.DRAW;
    else if (netScore < 0) return RESULTS.LOSS;
  },
};

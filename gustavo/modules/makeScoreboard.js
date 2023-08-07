export function makeScoreboard() {
  return {
    wins: 0,
    losses: 0,
    draws: 0,
    rounds: 1,

    isFinished() {
      return this.wins >= 5;
    },

    countWin() {
      this.wins++;
    },

    countLoss() {
      this.losses++;
    },

    countDraw() {
      this.draws++;
    },

    countRound() {
      this.rounds++;
    },
  };
}

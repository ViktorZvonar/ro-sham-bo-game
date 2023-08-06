export function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.trunc(Math.random() * choices.length)];
}

export function outcomes(playerScore, computerScore) {
  switch (true) {
    case playerScore > computerScore:
      console.log("You won! The Saver!!!");
      alert("You won! The Saver!!!");
      break;
    case playerScore < computerScore:
      console.log("The Destroyer won!!! But you have one more chance...");
      alert("The Destroyer won!!! But you have one more chance...");
      break;
    case playerScore === computerScore:
      console.log("Overall, it's a tie! But it's not the end. Muuahhahhaha!");
      alert("Overall, it's a tie! But it's not the end. Muuahhahhaha!");
      break;
  }
}

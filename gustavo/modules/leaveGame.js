export function leaveGame() {
  const wantToLeave = confirm("If you leave, mankind will be ASHED. Boo!");

  if (wantToLeave) {
    console.clear();
    alert("You left the Game... See you in hell!");
    return;
  }
  return prompt("What's your move?");
}

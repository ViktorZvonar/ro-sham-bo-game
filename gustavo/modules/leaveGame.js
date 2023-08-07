import { ui } from "./ui.js";

export function leaveGame() {
  const wantToExit = ui.getPlayerExitConfirmation();
  if (wantToExit) {
    ui.exit();
    return true;
  }
  return false;
}

import { ui } from "./ui.js";

export function leaveGame() {
  const wantToExit = ui.getPlayerLeaveConfirmation();
  if (wantToExit) {
    ui.logExit();
    return true;
  }
  return false;
}

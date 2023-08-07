import { ui } from "./ui.js";

export function leaveGame() {
  const wantToExit = ui.getPlayerLeaveConfirmation();
  if (wantToExit) {
    ui.logLeave();
    return true;
  }
  return false;
}

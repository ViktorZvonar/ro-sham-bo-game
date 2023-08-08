import { ui } from "./ui.js";

export function leaveGame() {
  const wantToLeave = ui.getPlayerLeaveConfirmation();
  if (wantToLeave) {
    ui.logLeave();
    return true;
  }
  return false;
}

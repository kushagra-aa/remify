import { window } from "vscode";

const showInfo = (text: string) =>
  window.showInformationMessage(`REMify Says: ${text}`);

export default showInfo;

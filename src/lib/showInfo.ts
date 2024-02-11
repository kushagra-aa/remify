import { window } from "vscode";

const showInfo = (text: string) =>
  window.showInformationMessage(`REMifyy Says: ${text}`);

export default showInfo;

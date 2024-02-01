import { window } from "vscode";

const showInfo = (text: string) => window.showInformationMessage(`${text}`);

export default showInfo;

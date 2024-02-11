import { window } from "vscode";

const showError = (text: string) => window.showErrorMessage(`${text}`);
export const handleError = (text: string) =>
  showError(`REMifyy Exclaims: Conversion Filed! ${text}`);

export default showError;

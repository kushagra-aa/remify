import { workspace } from "vscode";

export const getBaseFontSize = () =>
  workspace.getConfiguration().get<string>("remify.baseFontSize");

import * as vscode from "vscode";
import { normalController, stringToUnitController } from "./commandControllers";

export function activate(context: vscode.ExtensionContext) {
  let converterDisposable = vscode.commands.registerCommand(
    "remify.normalConverter",
    normalController
  );
  let convertWithOptionsDisposable = vscode.commands.registerCommand(
    "remify.stringToUnit",
    stringToUnitController
  );

  context.subscriptions.push(converterDisposable, convertWithOptionsDisposable);
}

export function deactivate() {}

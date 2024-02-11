import * as vscode from "vscode";
import { normalController, stringToUnitController } from "./commandControllers";

export function activate(context: vscode.ExtensionContext) {
  let converterDisposable = vscode.commands.registerCommand(
    "remifyy.normalConverter",
    normalController
  );
  let convertWithOptionsDisposable = vscode.commands.registerCommand(
    "remifyy.stringToUnit",
    stringToUnitController
  );

  context.subscriptions.push(converterDisposable, convertWithOptionsDisposable);
}

export function deactivate() {}

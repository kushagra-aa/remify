import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let converterDisposable = vscode.commands.registerCommand(
    "remify.stringToUnit",
    () => {}
  );
  let convertWithOptionsDisposable = vscode.commands.registerCommand(
    "remify.normalConverter",
    () => {}
  );

  context.subscriptions.push(converterDisposable, convertWithOptionsDisposable);
}

export function deactivate() {}

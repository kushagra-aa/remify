import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "remify" is now active!');
  let disposable = vscode.commands.registerCommand("remify.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from REMify!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

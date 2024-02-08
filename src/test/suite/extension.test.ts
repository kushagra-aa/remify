import * as vscode from "vscode";
import converterTests from "./helpersTests/converters.test";
import stringHelperTests from "./helpersTests/stringHelpers.test";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  //   converterTests();
  stringHelperTests();
});

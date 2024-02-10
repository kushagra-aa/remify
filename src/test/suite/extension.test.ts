import * as vscode from "vscode";
import converterTests from "./helpersTests/converters.test";
import stringHelperTests from "./helpersTests/stringHelpers.test";
import validationTests from "./helpersTests/validations.test";
import conversionControllerTests from "./helpersTests/conversionController.test";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  stringHelperTests();
  validationTests();
  converterTests();
  conversionControllerTests();
});

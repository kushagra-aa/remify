import getInput from "./lib/getInput";
import { UNITS_OPTIONS } from "./constants";
import getQuickPick from "./lib/getQuickPick";
import { validateExpression, validateOptions } from "./helpers/validations";
import showError from "./lib/showError";
import copyToClipboard from "./lib/copyToClipboard";
import getSelection from "./lib/getSelections";
import replaceInEditor from "./lib/replaceInEditor";
import { window } from "vscode";
import conversionController from "./helpers/conversionController";

// Expected expression : 16px to rem
const stringToUnitController = async () => {
  try {
    const expression =
      (await getInput("Enter the expression Eg:'16px to rem'")) || "";
    if (!expression || expression === "") {
      return "";
    }
    const { expectedUnit, currentUnit, currentValue } =
      validateExpression(expression);
    if (!expectedUnit || !currentUnit || !currentValue) {
      return;
    }
    const result = conversionController(
      currentValue,
      currentUnit,
      expectedUnit
    );
    copyToClipboard(`${result}`);
  } catch (e) {
    showError("Oops! Something Went Sideways");
  }
};

// Expected expression : 16px
const normalController = async () => {
  try {
    const editor = window.activeTextEditor;
    if (!editor || editor === null) {
      return;
    }

    const selections = getSelection(editor);
    if (selections.length > 0) {
      let expectedUnitInput = await getQuickPick(
        UNITS_OPTIONS,
        "Select the expected unit Eg:'rem'"
      );
      editor.edit((e) => {
        selections.forEach(async (selection) => {
          const { expectedUnit, currentUnit, currentValue } = validateOptions(
            selection.text,
            expectedUnitInput
          );
          if (!expectedUnit || !currentUnit || !currentValue) {
            return;
          }
          const result = conversionController(
            currentValue,
            currentUnit,
            expectedUnit
          );
          await replaceInEditor(e, selection.selection, result);
        });
      });
    } else {
      let expression = (await getInput("Enter the expression Eg:'16px'")) || "";
      let expectedUnitInput = await getQuickPick(
        UNITS_OPTIONS,
        "Select the expected unit Eg:'rem'"
      );
      const { expectedUnit, currentUnit, currentValue } = validateOptions(
        expression,
        expectedUnitInput
      );
      if (!expectedUnit || !currentUnit || !currentValue) {
        return;
      }
      const result = conversionController(
        currentValue,
        currentUnit,
        expectedUnit
      );
      await copyToClipboard(`${result}`);
    }
  } catch (e) {
    showError("Oops! Something Went Sideways");
  }
};

export { normalController, stringToUnitController };

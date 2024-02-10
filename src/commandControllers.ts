import getInput from "./helpers/getInput";
import { UNITS_OPTIONS } from "./constants";
import getQuickPick from "./helpers/getQuickPick";
import { validateExpression, validateOptions } from "./helpers/validations";
import showError from "./helpers/showError";
import copyToClipboard from "./helpers/copyToClipboard";
import getSelection from "./helpers/getSelections";
import replaceInEditor from "./helpers/replaceInEditor";
import { window } from "vscode";
import converterController from "./helpers/conversionController";

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
    const result = converterController(currentValue, currentUnit, expectedUnit);
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
          const result = converterController(
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
      const result = converterController(
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

import { UnitsEnum } from "../types/units";
import { handleError } from "./showError";
import {
  checkUnit,
  checkValue,
  extractUnit,
  splitString,
} from "./stringHelpers";

type ValidatedOptionType = {
  currentValue: string | undefined;
  currentUnit: UnitsEnum | undefined;
  expectedUnit: UnitsEnum | undefined;
};

const validateOptions = (currentValue: string, expectedUnit: string) => {
  let validatedOptions: ValidatedOptionType = {
    currentValue: undefined,
    currentUnit: undefined,
    expectedUnit: undefined,
  };
  validatedOptions.expectedUnit = checkUnit(expectedUnit); //"rem"
  validatedOptions.currentValue = checkValue(currentValue); //"16px"
  if (!validatedOptions.expectedUnit) {
    handleError("Invalid Expected Unit");
  }
  if (!validatedOptions.currentValue) {
    handleError("Invalid Current Value");
  } else {
    validatedOptions.currentUnit = checkUnit(extractUnit(currentValue)); //"px"
    if (!validatedOptions.currentUnit) {
      handleError("Invalid Current Unit");
    }
  }
  return validatedOptions;
};

const validateExpression = (expression: string): ValidatedOptionType => {
  let validatedOptions: ValidatedOptionType = {
    currentValue: undefined,
    currentUnit: undefined,
    expectedUnit: undefined,
  };
  if (!expression || expression === "") {
    handleError(`Entered Expression can't be empty`);
    return validatedOptions;
  }
  const expressionArray = splitString(expression); // ['16px','to','rem']
  if (expressionArray.length! <= 2) {
    handleError(`Entered Expression is Invalid '${expression}'`);
    return validatedOptions;
  }
  return validateOptions(expressionArray[0], expressionArray[2]);
};

export { validateOptions, validateExpression };

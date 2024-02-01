import { UnitsEnum } from "./types/units";
import {
  addUnit,
  extractUnit,
  extractValue,
  splitString,
} from "./helpers/stringHelpers";
import unitConverter from "./helpers/unitConverter";
import getInput from "./helpers/getInput";
import { UNITS_OPTIONS } from "./constants";
import getQuickPick from "./helpers/getQuickPick";
import showInfo from "./helpers/showInfo";

// Expected expression : 16px to rem
const stringToUnitController = async () => {
  const expression =
    (await getInput("Enter the expression Eg:'16px to rem'")) || "";
  if (!expression || expression === "") {
    return "";
  }
  const expressionArray = splitString(expression); // ['16px','to','rem']
  let expectedUnit: UnitsEnum = expressionArray[2].toLowerCase() as UnitsEnum; //"rem"
  const currentUnit: UnitsEnum = extractUnit(expressionArray[0]) as UnitsEnum; //"px"
  const currentValue = expressionArray[0].toLowerCase(); //"16px"
  const result = converterController(currentValue, currentUnit, expectedUnit);
  showInfo(`${result}`);
};

// Expected expression : 16px
const normalController = async () => {
  const expression = (await getInput("Enter the expression Eg:'16px'")) || "";
  let expectedUnitInput = await getQuickPick(
    UNITS_OPTIONS,
    "Select the expected unit Eg:'rem'"
  );
  if (
    (!expression || expression === "") &&
    (!expectedUnitInput || expectedUnitInput === "")
  ) {
    return "";
  }
  const expectedUnit = expectedUnitInput.toLowerCase() as UnitsEnum;
  const currentUnit: UnitsEnum = extractUnit(expression) as UnitsEnum; //"px"
  const currentValue = expression.toLowerCase(); //"16px"
  const result = converterController(currentValue, currentUnit, expectedUnit);
  showInfo(`${result}`);
};

const converterController = (
  currentValue: string,
  currentUnit: UnitsEnum,
  expectedUnit: UnitsEnum
) => {
  const baseValue = 16;
  let result = 0;

  console.log({ expectedUnit, currentUnit, currentValue, baseValue, result });
  console.log(expectedUnit !== currentUnit);
  if (expectedUnit !== currentUnit) {
    switch (currentUnit) {
      case "px":
        console.log("--PX--");
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.pxToRem(currentValue, baseValue);
            console.log('"px -> rem" :>> ', result);
            break;
          case "%":
            result = unitConverter.pxToPercent(currentValue, baseValue);
            console.log('"px -> %" :>> ', result);
            break;
          case "ch":
            result = unitConverter.pxToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.pxToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.pxToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.pxToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.pxToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.pxToVw(currentValue, baseValue);
            break;
        }
        break;
      case "%":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.percentToRem(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.percentToPx(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.percentToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.percentToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.percentToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.percentToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.percentToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.percentToVw(currentValue, baseValue);
            break;
        }
        break;
      case "ch":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.chToRem(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.chToPercent(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.chToPx(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.chToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.chToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.chToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.chToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.chToVw(currentValue, baseValue);
            break;
        }
        break;
      case "em":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.emToRem(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.emToPercent(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.emToCh(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.emToPx(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.emToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.emToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.emToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.emToVw(currentValue, baseValue);
            break;
        }
        break;
      case "pc":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.pcToRem(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.pcToPercent(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.pcToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.pcToEm(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.pcToPx(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.pcToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.pcToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.pcToVw(currentValue, baseValue);
            break;
        }
        break;
      case "pt":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.ptToRem(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.ptToPercent(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.ptToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.ptToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.ptToPc(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.ptToPx(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.ptToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.ptToVw(currentValue, baseValue);
            break;
        }
        break;
      case "rem":
        switch (expectedUnit) {
          case "px":
            result = unitConverter.remToPx(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.remToPercent(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.remToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.remToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.remToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.remToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.remToVh(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.remToVw(currentValue, baseValue);
            break;
        }
        break;
      case "vh":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.vhToRem(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.vhToPercent(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.vhToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.vhToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.vhToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.vhToPt(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.vhToPx(currentValue, baseValue);
            break;
          case "vw":
            result = unitConverter.vhToVw(currentValue, baseValue);
            break;
        }
        break;
      case "vw":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.vwToRem(currentValue, baseValue);
            break;
          case "%":
            result = unitConverter.vwToPercent(currentValue, baseValue);
            break;
          case "ch":
            result = unitConverter.vwToCh(currentValue, baseValue);
            break;
          case "em":
            result = unitConverter.vwToEm(currentValue, baseValue);
            break;
          case "pc":
            result = unitConverter.vwToPc(currentValue, baseValue);
            break;
          case "pt":
            result = unitConverter.vwToPt(currentValue, baseValue);
            break;
          case "vh":
            result = unitConverter.vwToVh(currentValue, baseValue);
            break;
          case "px":
            result = unitConverter.vwToPx(currentValue, baseValue);
            break;
        }
        break;
      default:
        result = extractValue(currentValue);
        expectedUnit = currentUnit;
    }
  } else {
    console.log("Else!!");
    result = extractValue(currentValue);
    expectedUnit = currentUnit;
  }

  return addUnit(result, expectedUnit);
};

export { normalController, stringToUnitController };

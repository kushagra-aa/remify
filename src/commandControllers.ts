import { UnitsEnum } from "./types/units";
import {
  addUnit,
  extractUnit,
  extractValue,
  splitString,
} from "./helpers/stringHelpers";
import unitConverter from "./helpers/unitConverter";

// Expected expression : 16px to rem
const stringToUnitController = (expression: string) => {
  const expressionArray = splitString(expression); // ['16px','to','rem']
  let expectedUnit: UnitsEnum = expressionArray[2] as UnitsEnum; //"rem"
  const currentUnit: UnitsEnum = extractUnit(expressionArray[0]) as UnitsEnum; //"px"
  const currentValue = expressionArray[0]; //"16px"
  return converterController(currentUnit, expectedUnit, currentValue);
};

// Expected expression : 16px
const normalController = (expression: string, expectedUnit: UnitsEnum) => {
  const currentUnit: UnitsEnum = extractUnit(expression) as UnitsEnum; //"px"
  const currentValue = expression; //"16px"
  return converterController(currentUnit, expectedUnit, currentValue);
};

const converterController = (
  expectedUnit: UnitsEnum,
  currentUnit: UnitsEnum,
  currentValue: string
) => {
  const baseValue = 16;
  let result = 0;

  if (expectedUnit !== currentUnit) {
    switch (currentUnit) {
      case "px":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.pxToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.pxToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.pxToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.pxToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.pxToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.pxToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.pxToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.pxToVw(currentValue, baseValue);
        }
      case "%":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.percentToRem(currentValue, baseValue);
          case "px":
            result = unitConverter.percentToPx(currentValue, baseValue);
          case "ch":
            result = unitConverter.percentToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.percentToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.percentToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.percentToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.percentToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.percentToVw(currentValue, baseValue);
        }
      case "ch":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.chToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.chToPercent(currentValue, baseValue);
          case "px":
            result = unitConverter.chToPx(currentValue, baseValue);
          case "em":
            result = unitConverter.chToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.chToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.chToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.chToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.chToVw(currentValue, baseValue);
        }
      case "em":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.emToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.emToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.emToCh(currentValue, baseValue);
          case "px":
            result = unitConverter.emToPx(currentValue, baseValue);
          case "pc":
            result = unitConverter.emToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.emToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.emToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.emToVw(currentValue, baseValue);
        }
      case "pc":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.pcToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.pcToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.pcToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.pcToEm(currentValue, baseValue);
          case "px":
            result = unitConverter.pcToPx(currentValue, baseValue);
          case "pt":
            result = unitConverter.pcToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.pcToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.pcToVw(currentValue, baseValue);
        }
      case "pt":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.ptToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.ptToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.ptToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.ptToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.ptToPc(currentValue, baseValue);
          case "px":
            result = unitConverter.ptToPx(currentValue, baseValue);
          case "vh":
            result = unitConverter.ptToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.ptToVw(currentValue, baseValue);
        }
      case "rem":
        switch (expectedUnit) {
          case "px":
            result = unitConverter.remToPx(currentValue, baseValue);
          case "%":
            result = unitConverter.remToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.remToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.remToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.remToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.remToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.remToVh(currentValue, baseValue);
          case "vw":
            result = unitConverter.remToVw(currentValue, baseValue);
        }
      case "vh":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.vhToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.vhToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.vhToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.vhToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.vhToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.vhToPt(currentValue, baseValue);
          case "px":
            result = unitConverter.vhToPx(currentValue, baseValue);
          case "vw":
            result = unitConverter.vhToVw(currentValue, baseValue);
        }
      case "vw":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.vwToRem(currentValue, baseValue);
          case "%":
            result = unitConverter.vwToPercent(currentValue, baseValue);
          case "ch":
            result = unitConverter.vwToCh(currentValue, baseValue);
          case "em":
            result = unitConverter.vwToEm(currentValue, baseValue);
          case "pc":
            result = unitConverter.vwToPc(currentValue, baseValue);
          case "pt":
            result = unitConverter.vwToPt(currentValue, baseValue);
          case "vh":
            result = unitConverter.vwToVh(currentValue, baseValue);
          case "px":
            result = unitConverter.vwToPx(currentValue, baseValue);
        }
      default:
        result = extractValue(currentValue);
        expectedUnit = currentUnit;
    }
  } else {
    result = extractValue(currentValue);
    expectedUnit = currentUnit;
  }

  return addUnit(result, expectedUnit);
};

export { normalController, stringToUnitController };

import { UnitsEnum } from "./../types/units";
import { addUnit, extractValue } from "./stringHelpers";
import unitConverter from "./unitConverter";
import { getBaseFontSize } from "./getConfig";

const converterController = (
  currentValue: string,
  currentUnit: UnitsEnum,
  expectedUnit: UnitsEnum
) => {
  const baseValue = extractValue(getBaseFontSize() || "16px");
  let result = 0;

  if (expectedUnit !== currentUnit) {
    switch (currentUnit) {
      case "px":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.pxToRem(currentValue, baseValue);
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
        }
        break;
      case "em":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.emToRem(currentValue, baseValue);
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
        }
        break;
      case "pc":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.pcToRem(currentValue, baseValue);
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
        }
        break;
      case "pt":
        switch (expectedUnit) {
          case "rem":
            result = unitConverter.ptToRem(currentValue, baseValue);
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
        }
        break;
      case "rem":
        switch (expectedUnit) {
          case "px":
            result = unitConverter.remToPx(currentValue, baseValue);
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
        }
        break;
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

export default converterController;

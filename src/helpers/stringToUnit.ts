import { UnitsEnum } from "../types/units";
import { extractUnit, extractValue, splitString } from "./stringHelpers";
import unitConverter from "./unitConverter";

// Expected expression : 16px to rem
const stringToUnit = (expression: string) => {
    const expressionArray = splitString(expression); // ['16px','to','rem']
    const baseValue = 16;
    let result = 0;
    let expectedUnit: UnitsEnum = expressionArray[2] as UnitsEnum; //"rem"
    const currentUnit: UnitsEnum = extractUnit(expressionArray[0]) as UnitsEnum; //"px"
    const currentValue = expressionArray[0]; //"16px"

    if (expectedUnit !== currentUnit) {
        switch (currentUnit) {
            case "px":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.pxToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.pxToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.pxToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.pxToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.pxToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.pxToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.pxToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.pxToVw(currentValue, baseValue);
                }
            case "%":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.percentToRem(currentValue, baseValue);
                    case "px":
                        unitConverter.percentToPx(currentValue, baseValue);
                    case "ch":
                        unitConverter.percentToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.percentToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.percentToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.percentToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.percentToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.percentToVw(currentValue, baseValue);
                }
            case "ch":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.chToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.chToPercent(currentValue, baseValue);
                    case "px":
                        unitConverter.chToPx(currentValue, baseValue);
                    case "em":
                        unitConverter.chToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.chToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.chToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.chToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.chToVw(currentValue, baseValue);
                }
            case "em":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.emToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.emToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.emToCh(currentValue, baseValue);
                    case "px":
                        unitConverter.emToPx(currentValue, baseValue);
                    case "pc":
                        unitConverter.emToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.emToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.emToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.emToVw(currentValue, baseValue);
                }
            case "pc":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.pcToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.pcToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.pcToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.pcToEm(currentValue, baseValue);
                    case "px":
                        unitConverter.pcToPx(currentValue, baseValue);
                    case "pt":
                        unitConverter.pcToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.pcToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.pcToVw(currentValue, baseValue);
                }
            case "pt":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.ptToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.ptToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.ptToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.ptToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.ptToPc(currentValue, baseValue);
                    case "px":
                        unitConverter.ptToPx(currentValue, baseValue);
                    case "vh":
                        unitConverter.ptToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.ptToVw(currentValue, baseValue);
                }
            case "rem":
                switch (expectedUnit) {
                    case "px":
                        unitConverter.remToPx(currentValue, baseValue);
                    case "%":
                        unitConverter.remToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.remToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.remToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.remToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.remToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.remToVh(currentValue, baseValue);
                    case "vw":
                        unitConverter.remToVw(currentValue, baseValue);
                }
            case "vh":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.vhToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.vhToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.vhToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.vhToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.vhToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.vhToPt(currentValue, baseValue);
                    case "px":
                        unitConverter.vhToPx(currentValue, baseValue);
                    case "vw":
                        unitConverter.vhToVw(currentValue, baseValue);
                }
            case "vw":
                switch (expectedUnit) {
                    case "rem":
                        unitConverter.vwToRem(currentValue, baseValue);
                    case "%":
                        unitConverter.vwToPercent(currentValue, baseValue);
                    case "ch":
                        unitConverter.vwToCh(currentValue, baseValue);
                    case "em":
                        unitConverter.vwToEm(currentValue, baseValue);
                    case "pc":
                        unitConverter.vwToPc(currentValue, baseValue);
                    case "pt":
                        unitConverter.vwToPt(currentValue, baseValue);
                    case "vh":
                        unitConverter.vwToVh(currentValue, baseValue);
                    case "px":
                        unitConverter.vwToPx(currentValue, baseValue);
                }
            default:
                result = extractValue(currentValue);
                expectedUnit = currentUnit;
        }
    }
    else {
        result = extractValue(currentValue);
        expectedUnit = currentUnit;
    }

    return `${result}${expectedUnit}`;
};

export default stringToUnit;

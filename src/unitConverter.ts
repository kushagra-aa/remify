import {
    pXtoREM,
    emToREM,
    chtoREM,
    vwtoREM,
    vhtoREM,
    percentToREM,
    ptToREM,
    pcToREM
} from "./helpers/converters";
import { addUnit, removeUnit } from "./helpers/stringHelpers";

const convert = (converterFunction: (val: number, base: number) => number, val: string, base: number): string => {
    return addUnit(converterFunction(removeUnit(val), base), 'rem');
};

const unitConverter = {
    pXtoREM: (val: string, base: number) => convert(pXtoREM, val, base),
    emToREM: (val: string, base: number) => convert(emToREM, val, base),
    chtoREM: (val: string, base: number) => convert(chtoREM, val, base),
    vwtoREM: (val: string, base: number) => convert(vwtoREM, val, base),
    vhtoREM: (val: string, base: number) => convert(vhtoREM, val, base),
    percentToREM: (val: string, base: number) => convert(percentToREM, val, base),
    ptToREM: (val: string, base: number) => convert(ptToREM, val, base),
    pcToREM: (val: string, base: number) => convert(pcToREM, val, base),
};

export default unitConverter;
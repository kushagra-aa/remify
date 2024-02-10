import {
  remToPx,
  remToEm,
  remToPt,
  remToPc,
  pxToRem,
  pxToEm,
  pxToPt,
  pxToPc,
  emToRem,
  emToPx,
  emToPt,
  emToPc,
  ptToRem,
  ptToPx,
  ptToEm,
  ptToPc,
  pcToRem,
  pcToPx,
  pcToEm,
  pcToPt,
} from "./converters";
import { extractValue } from "./stringHelpers";

const convert = (
  converterFunction: (val: number, base: number) => number,
  val: string,
  base: number
): number => {
  return parseFloat(converterFunction(extractValue(val), base).toFixed(3));
};

const unitConverter = {
  remToPx: (val: string, base: number) => convert(remToPx, val, base),
  remToEm: (val: string, base: number) => convert(remToEm, val, base),
  remToPt: (val: string, base: number) => convert(remToPt, val, base),
  remToPc: (val: string, base: number) => convert(remToPc, val, base),
  pxToRem: (val: string, base: number) => convert(pxToRem, val, base),
  pxToEm: (val: string, base: number) => convert(pxToEm, val, base),
  pxToPt: (val: string, base: number) => convert(pxToPt, val, base),
  pxToPc: (val: string, base: number) => convert(pxToPc, val, base),
  emToRem: (val: string, base: number) => convert(emToRem, val, base),
  emToPx: (val: string, base: number) => convert(emToPx, val, base),
  emToPt: (val: string, base: number) => convert(emToPt, val, base),
  emToPc: (val: string, base: number) => convert(emToPc, val, base),
  ptToRem: (val: string, base: number) => convert(ptToRem, val, base),
  ptToPx: (val: string, base: number) => convert(ptToPx, val, base),
  ptToEm: (val: string, base: number) => convert(ptToEm, val, base),
  ptToPc: (val: string, base: number) => convert(ptToPc, val, base),
  pcToRem: (val: string, base: number) => convert(pcToRem, val, base),
  pcToPx: (val: string, base: number) => convert(pcToPx, val, base),
  pcToEm: (val: string, base: number) => convert(pcToEm, val, base),
  pcToPt: (val: string, base: number) => convert(pcToPt, val, base),
};

export default unitConverter;

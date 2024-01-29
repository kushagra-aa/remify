export const remToPx = (value: number, basePixelSize: number) => value * basePixelSize;
export const remToEm = (value: number, basePixelSize: number) => value * basePixelSize / 16;
export const remToCh = (value: number, basePixelSize: number) => value * basePixelSize / 2;
export const remToVw = (value: number, basePixelSize: number) => value * 100;
export const remToVh = (value: number, basePixelSize: number) => value * 100;
export const remToPercent = (value: number, basePixelSize: number) => value * basePixelSize / 16 * 100;
export const remToPt = (value: number, basePixelSize: number) => value * basePixelSize / 12;
export const remToPc = (value: number, basePixelSize: number) => value * basePixelSize / 6;

// Converts a pixel value to a Rem value, based on a base font size.
// Divide the pixel value by the base font size to get the Rem value.
export const pxToRem = (val: number, base: number) => val / base;
export const pxToEm = (value: number, basePixelSize: number) => value / 16;
export const pxToCh = (value: number, basePixelSize: number) => value / (basePixelSize / 2);
export const pxToVw = (value: number, basePixelSize: number) => value / 100;
export const pxToVh = (value: number, basePixelSize: number) => value / 100;
export const pxToPercent = (value: number, basePixelSize: number) => value / basePixelSize * 100;
export const pxToPt = (value: number, basePixelSize: number) => value / (basePixelSize / 12);
export const pxToPc = (value: number, basePixelSize: number) => value / (basePixelSize / 6);

// Converts an em value to a Rem value, based on a base font size.
// Multiply the em value by the base font size and divide by 16 to get the Rem value.
export const emToRem = (val: number, base: number) => val * base / 16;
export const emToPx = (value: number, basePixelSize: number) => value * basePixelSize / 16;
export const emToCh = (value: number, basePixelSize: number) => value * basePixelSize / (2 * 16);
export const emToVw = (value: number, basePixelSize: number) => value * (100 / 16);
export const emToVh = (value: number, basePixelSize: number) => value * (100 / 16);
export const emToPercent = (value: number, basePixelSize: number) => value * 100;
export const emToPt = (value: number, basePixelSize: number) => value * basePixelSize / (16 * 12);
export const emToPc = (value: number, basePixelSize: number) => value * basePixelSize / (16 * 6);

// Converts a character value to a Rem value, based on a base font size.
// Divide the character value by the base font size and multiply by 2 to get the Rem value.
export const chToRem = (val: number, base: number) => val / base * 2;
export const chToPx = (value: number, basePixelSize: number) => value * basePixelSize;
export const chToEm = (value: number, basePixelSize: number) => value * (2 / basePixelSize);
export const chToVw = (value: number, basePixelSize: number) => value * (50 / basePixelSize);
export const chToVh = (value: number, basePixelSize: number) => value * (50 / basePixelSize);
export const chToPercent = (value: number, basePixelSize: number) => value * (5000 / basePixelSize);
export const chToPt = (value: number, basePixelSize: number) => value * basePixelSize / 6;
export const chToPc = (value: number, basePixelSize: number) => value * basePixelSize / 3;

// Converts a viewport width (vw) value to a Rem value.
// Divide the vw value by 100 to get the Rem value, assuming consistent viewport scaling.
export const vwToRem = (val: number, base: number) => val / 100;
export const vwToPx = (value: number, basePixelSize: number) => value * basePixelSize / 100;
export const vwToEm = (value: number, basePixelSize: number) => value / (100 / basePixelSize);
export const vwToCh = (value: number, basePixelSize: number) => value / (100 * basePixelSize);
export const vwToVh = (value: number, basePixelSize: number) => value;
export const vwToPercent = (value: number, basePixelSize: number) => value * 100;
export const vwToPt = (value: number, basePixelSize: number) => value * (basePixelSize / 600);
export const vwToPc = (value: number, basePixelSize: number) => value * (basePixelSize / 300);

// Converts a viewport height (vh) value to a Rem value.
// Divide the vh value by 100 to get the Rem value, assuming consistent viewport scaling.
export const vhToRem = (val: number, base: number) => val / 100;
export const vhToPx = (value: number, basePixelSize: number) => value * basePixelSize / 100;
export const vhToEm = (value: number, basePixelSize: number) => value / (100 / basePixelSize);
export const vhToCh = (value: number, basePixelSize: number) => value / (100 * basePixelSize);
export const vhToVw = (value: number, basePixelSize: number) => value * (basePixelSize / 50);
export const vhToPercent = (value: number, basePixelSize: number) => value * 100;
export const vhToPt = (value: number, basePixelSize: number) => value * (basePixelSize / 600);
export const vhToPc = (value: number, basePixelSize: number) => value * (basePixelSize / 300);

// Converts a percentage value to a Rem value, relative to the parent element's font size.
// - val: The percentage value to convert (e.g., 50%).
// - base: The base font size in pixels (used for reference).
// Divide the percentage value by 100 to get the decimal equivalent (e.g., 50% becomes 0.5).
// Multiply by the base font size and divide by 16 (the number of pixels in 1 Rem) to get the Rem value.
export const percentToRem = (val: number, base: number) => val / 100 * base / 16;
export const percentToPx = (value: number, basePixelSize: number) => value * basePixelSize / 1600;
export const percentToEm = (value: number, basePixelSize: number) => value / 10;
export const percentToCh = (value: number, basePixelSize: number) => value * basePixelSize / (2 * 100);
export const percentToVw = (value: number, basePixelSize: number) => value / 2;
export const percentToVh = (value: number, basePixelSize: number) => value / 2;
export const percentToPt = (value: number, basePixelSize: number) => value * basePixelSize / (100 * 12);
export const percentToPc = (value: number, basePixelSize: number) => value * basePixelSize / (100 * 6);

// Converts a point value to a Rem value.
// - val: The point value to convert (e.g., 12pt).
// - base: The base font size in pixels (used for reference).
// Note: 1 point is equal to 1/12 inch, which is approximately equal to the base font size divided by 12 in pixels.
// Divide the point value by the base font size and by 12 to get the Rem value.
export const ptToRem = (val: number, base: number) => val / base / 12;
export const ptToPx = (value: number, basePixelSize: number) => value * basePixelSize / 12;
export const ptToEm = (value: number, basePixelSize: number) => value / (12 / 16);;
export const ptToCh = (value: number, basePixelSize: number) => value * basePixelSize / (12 * 2);
export const ptToVw = (value: number, basePixelSize: number) => value * basePixelSize / (12 * 100);
export const ptToVh = (value: number, basePixelSize: number) => value * basePixelSize / (12 * 100);
export const ptToPercent = (value: number, basePixelSize: number) => value * 100 / 12;
export const ptToPc = (value: number, basePixelSize: number) => value / 2;;

// Converts a pica value to a Rem value.
// - val: The pica value to convert (e.g., 6pc).
// - base: The base font size in pixels (used for reference).
// Note: 1 pica is equal to 1/6 inch, which is approximately equal to the base font size divided by 6 in pixels.
// Divide the pica value by the base font size and by 6 to get the Rem value.
export const pcToRem = (val: number, base: number) => val / base / 6;
export const pcToPx = (value: number, basePixelSize: number) => value * basePixelSize / 6;
export const pcToEm = (value: number, basePixelSize: number) => value / (6 / 16);
export const pcToCh = (value: number, basePixelSize: number) => value * basePixelSize / (6 * 2);
export const pcToVw = (value: number, basePixelSize: number) => value * basePixelSize / (6 * 100);
export const pcToVh = (value: number, basePixelSize: number) => value * basePixelSize / (6 * 100);
export const pcToPercent = (value: number, basePixelSize: number) => value * 100 / 6;
export const pcToPt = (value: number, basePixelSize: number) => value / (6 * 16 / 100);
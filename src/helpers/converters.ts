export const remToPx = (value: number, basePixelSize: number) =>
  value * basePixelSize;
export const remToEm = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / 16;
export const remToPt = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / 12;
export const remToPc = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / 6;

// Converts a pixel value to a Rem value, based on a base font size.
// Divide the pixel value by the base font size to get the Rem value.
export const pxToRem = (val: number, base: number) => val / base;
export const pxToEm = (value: number, basePixelSize: number) => value / 16;
export const pxToPt = (value: number, basePixelSize: number) =>
  value / (basePixelSize / 12);
export const pxToPc = (value: number, basePixelSize: number) =>
  value / (basePixelSize / 6);

// Converts an em value to a Rem value, based on a base font size.
// Multiply the em value by the base font size and divide by 16 to get the Rem value.
export const emToRem = (val: number, base: number) => (val * base) / 16;
export const emToPx = (value: number, basePixelSize: number) =>
  value * basePixelSize;
export const emToPt = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / (16 * 12);
export const emToPc = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / (16 * 6);

// Converts a point value to a Rem value.
// - val: The point value to convert (e.g., 12pt).
// - base: The base font size in pixels (used for reference).
// Note: 1 point is equal to 1/12 inch, which is approximately equal to the base font size divided by 12 in pixels.
// Divide the point value by the base font size and by 12 to get the Rem value.
export const ptToRem = (val: number, base: number) => val / base / 12;
export const ptToPx = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / 12;
export const ptToEm = (value: number, basePixelSize: number) =>
  value / (12 / 16);
export const ptToPc = (value: number, basePixelSize: number) => value / 2;

// Converts a pica value to a Rem value.
// - val: The pica value to convert (e.g., 6pc).
// - base: The base font size in pixels (used for reference).
// Note: 1 pica is equal to 1/6 inch, which is approximately equal to the base font size divided by 6 in pixels.
// Divide the pica value by the base font size and by 6 to get the Rem value.
export const pcToRem = (val: number, base: number) => val / base / 6;
export const pcToPx = (value: number, basePixelSize: number) =>
  (value * basePixelSize) / 6;
export const pcToEm = (value: number, basePixelSize: number) =>
  value / (6 / 16);
export const pcToPt = (value: number, basePixelSize: number) =>
  value / ((6 * 16) / 100);

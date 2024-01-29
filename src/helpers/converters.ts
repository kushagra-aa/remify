// Converts a pixel value to a REM value, based on a base font size.
// Divide the pixel value by the base font size to get the REM value.
export const pXtoREM = (val: number, base: number) => val / base;

// Converts an em value to a REM value, based on a base font size.
// Multiply the em value by the base font size and divide by 16 to get the REM value.
export const emToREM = (val: number, base: number) => val * base / 16;

// Converts a character value to a REM value, based on a base font size.
// Divide the character value by the base font size and multiply by 2 to get the REM value.
export const chtoREM = (val: number, base: number) => val / base * 2;

// Converts a viewport width (vw) value to a REM value.
// Divide the vw value by 100 to get the REM value, assuming consistent viewport scaling.
export const vwtoREM = (val: number, base: number) => val / 100;

// Converts a viewport height (vh) value to a REM value.
// Divide the vh value by 100 to get the REM value, assuming consistent viewport scaling.
export const vhtoREM = (val: number, base: number) => val / 100;
// --- Functions for converting CSS units to REM ---

// Converts a percentage value to a REM value, relative to the parent element's font size.
// - val: The percentage value to convert (e.g., 50%).
// - base: The base font size in pixels (used for reference).
// Divide the percentage value by 100 to get the decimal equivalent (e.g., 50% becomes 0.5).
// Multiply by the base font size and divide by 16 (the number of pixels in 1 REM) to get the REM value.
export const percentToREM = (val: number, base: number) => val / 100 * base / 16;

// Converts a point value to a REM value.
// - val: The point value to convert (e.g., 12pt).
// - base: The base font size in pixels (used for reference).
// Note: 1 point is equal to 1/12 inch, which is approximately equal to the base font size divided by 12 in pixels.
// Divide the point value by the base font size and by 12 to get the REM value.
export const ptToREM = (val: number, base: number) => val / base / 12;

// Converts a pica value to a REM value.
// - val: The pica value to convert (e.g., 6pc).
// - base: The base font size in pixels (used for reference).
// Note: 1 pica is equal to 1/6 inch, which is approximately equal to the base font size divided by 6 in pixels.
// Divide the pica value by the base font size and by 6 to get the REM value.
export const pcToREM = (val: number, base: number) => val / base / 6;

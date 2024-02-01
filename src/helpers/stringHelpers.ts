export const extractValue = (val: string): number =>
  parseFloat((val.match(/\d+(\.\d+)?/g) || ["0"])[0].toString());
export const addUnit = (val: number, unit: string): string => `${val}${unit}`;
export const extractUnit = (val: string): string =>
  (val.match(/(\D+)$/) || ["", ""])[1].toString().toLowerCase();
// Use the trim() method to remove any leading/trailing spaces.
// Split the trimmed text into an array of words using the split() method with a space as the delimiter.
export const splitString = (text: string): string[] => text.trim().split(/\s+/);

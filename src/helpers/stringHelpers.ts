export const removeUnit = (val: string): number => parseFloat((val.match(/\d+(\.\d+)?/g) || ['0'])[0].toString());
export const addUnit = (val: number, unit: string): string => `${val}${unit}`;
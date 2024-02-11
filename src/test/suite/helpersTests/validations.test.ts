import * as assert from "assert";
import { describe, it } from "mocha";
import {
  validateExpression,
  validateOptions,
} from "../../../helpers/validations";

export default function validationTests() {
  describe("Conversion functions", () => {
    // Validates the inputs (inputExpression, expectedUnit) ('16px','rem') and returns an object of {currentValue,currentUnit,expectedUnit}
    describe("validateOptions", () => {
      it("should validate basic input ('16px','rem')", () => {
        const result = validateOptions("16px", "rem");
        assert.deepEqual(result, {
          currentValue: "16px",
          currentUnit: "px",
          expectedUnit: "rem",
        });
      });
      it("should handle empty spaces", () => {
        const result = validateOptions(" 16px ", "rem");
        assert.deepEqual(result, {
          currentValue: "16px",
          currentUnit: "px",
          expectedUnit: "rem",
        });
      });
      it("should handle wrong values", () => {
        const result = validateOptions("6p ", "m");
        assert.deepEqual(result, {
          currentValue: "6p",
          currentUnit: undefined,
          expectedUnit: undefined,
        });
      });
    });
    // Validates the input (inputExpression) ('16px to rem') and returns an object of {currentValue,currentUnit,expectedUnit}
    describe("validateExpression", () => {
      it("should validate basic input '16px to rem'", () => {
        const result = validateExpression("16px to rem");
        assert.deepEqual(result, {
          currentValue: "16px",
          currentUnit: "px",
          expectedUnit: "rem",
        });
      });
      it("should handle empty spaces", () => {
        const result = validateExpression(" 16px to rem");
        assert.deepEqual(result, {
          currentValue: "16px",
          currentUnit: "px",
          expectedUnit: "rem",
        });
      });
      it("should handle wrong values", () => {
        const result = validateExpression("16p to re");
        assert.deepEqual(result, {
          currentValue: "16p",
          currentUnit: undefined,
          expectedUnit: undefined,
        });
      });
    });
  });
}

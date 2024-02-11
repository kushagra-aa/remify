import * as assert from "assert";
import {
  addUnit,
  checkUnit,
  checkValue,
  extractUnit,
  extractValue,
  extractValueNUnit,
  splitString,
} from "../../../helpers/stringHelpers";
import { describe, it } from "mocha";

export default function stringHelperTests() {
  describe("String Helpers", () => {
    // Extract Value from a string expression '16px' -> 16
    describe("extractValue", () => {
      it("should extract 16 from '16px'", () => {
        const result = extractValue("16px");
        assert.equal(result, 16);
      });
      it("should handle empty spaces in values", () => {
        const result = extractValue(" 16px");
        assert.equal(result, 16);
      });
    });
    // Add Unit from a string expression 16 -> '16px'
    describe("addUnit", () => {
      it("should add unit at the end", () => {
        const result = addUnit(16, "px");
        assert.equal(result, "16px");
      });
    });
    // Extract Unit from a string expression '16px' -> 'px'
    describe("extractUnit", () => {
      it("should extract 'px' from '16px'", () => {
        const result = extractUnit("16px");
        assert.equal(result, "px");
      });
      it("should handle empty spaces in values", () => {
        const result = extractUnit(" 16px");
        assert.equal(result, "px");
      });
    });
    // Extract Value and Unit from a string expression '16px' -> { value: 16, unit: "px" }
    describe("extractValueNUnit", () => {
      it("should extract value and unit from '16px'", () => {
        const result = extractValueNUnit("16px");
        assert.deepEqual(result, { value: 16, unit: "px" });
      });
      it("should handle empty spaces in values", () => {
        const result = extractValueNUnit(" 16px");
        assert.deepEqual(result, { value: 16, unit: "px" });
      });
    });
    // Split a string expression '16px to rem' -> ['16px','rem']
    describe("splitString", () => {
      it("should extract ['16px','rem'] from '16px to rem'", () => {
        const result = splitString("16px to rem");
        assert.deepEqual(result, ["16px", "rem"]);
      });
      it("should extract ['16px','-->','rem'] from '16px --> rem'", () => {
        const result = splitString("16px --> rem");
        assert.deepEqual(result, ["16px", "rem"]);
      });
      it("should handle unnecessary empty spaces", () => {
        const result = splitString(" 16px to  rem ");
        assert.deepEqual(result, ["16px", "rem"]);
      });
      it("should handle no empty spaces in values", () => {
        const result = splitString("16pxtorem");
        assert.deepEqual(result, ["16px", "rem"]);
      });
    });
    // Checks that the string is a valid unit
    describe("checkUnit", () => {
      it("should check the unit 'px'", () => {
        const result = checkUnit("px");
        assert.deepEqual(result, "px");
      });
      it("should handle Upper Case", () => {
        const result = checkUnit("PX");
        assert.deepEqual(result, "px");
      });
      it("should handle Camel Case", () => {
        const result = checkUnit("Px");
        assert.deepEqual(result, "px");
      });
    });
    // Checks that the string is a valid value expression '16px'
    describe("checkValue", () => {
      it("should check the expression '16px'", () => {
        const result = checkValue("16px");
        assert.deepEqual(result, "16px");
      });
      it("should handle Upper Case", () => {
        const result = checkValue("16PX");
        assert.deepEqual(result, "16px");
      });
      it("should handle Camel Case", () => {
        const result = checkValue("16Px");
        assert.deepEqual(result, "16px");
      });
    });
  });
}

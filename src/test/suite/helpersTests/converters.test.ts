import * as assert from "assert";
import { getBaseFontSize } from "../../../lib/getConfig";
import { extractValue } from "../../../helpers/stringHelpers";
import { describe, it } from "mocha";
import unitConverter from "../../../helpers/unitConverter";

export default function converterTests() {
  describe("Conversion functions", () => {
    const basePixelSize = extractValue(getBaseFontSize() || "16px"); // Use your desired base size

    remConverterTests(basePixelSize);
    pxConverterTests(basePixelSize);
    emConverterTests(basePixelSize);
    ptConverterTests(basePixelSize);
    pcConverterTests(basePixelSize);
  });
}

function remConverterTests(basePixelSize: number) {
  describe("Rem Conversions", () => {
    describe("remToPx", () => {
      it("should convert 1rem to base pixel size", () => {
        const result = unitConverter.remToPx("1rem", basePixelSize);
        assert.equal(result, basePixelSize);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.remToPx("0.5rem", basePixelSize);
        assert.equal(result, basePixelSize / 2);
      });
    });
    describe("remToEm", () => {
      it("should convert 1rem to 1em", () => {
        const result = unitConverter.remToEm("1rem", basePixelSize);
        assert.equal(result, 1);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.remToEm("0.5rem", basePixelSize);
        assert.equal(result, 0.5);
      });
    });
    describe("remToPt", () => {
      it("should convert 1rem to 1.333pt", () => {
        const result = unitConverter.remToPt("1rem", basePixelSize);
        assert.equal(result, 1.333);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.remToPt("0.5rem", basePixelSize);
        assert.equal(result, 0.667);
      });
    });
    describe("remToPc", () => {
      it("should convert 1rem to 2.667pc", () => {
        const result = unitConverter.remToPc("1rem", basePixelSize);
        assert.equal(result, 2.667);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.remToPc("0.5rem", basePixelSize);
        assert.equal(result, 1.333);
      });
    });
  });
}
function pxConverterTests(basePixelSize: number) {
  describe("Px Conversions", () => {
    describe("pxToRem", () => {
      it("should convert 16px to 1rem", () => {
        const result = unitConverter.pxToRem("16px", basePixelSize);
        assert.equal(result, 1);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pxToRem("8px", basePixelSize);
        assert.equal(result, 0.5);
      });
    });
    describe("pxToEm", () => {
      it("should convert 16px to 1em", () => {
        const result = unitConverter.pxToEm("16px", basePixelSize);
        assert.equal(result, 1);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pxToEm("8px", basePixelSize);
        assert.equal(result, 0.5);
      });
    });
    describe("pxToPt", () => {
      it("should convert 16px to 12Pt", () => {
        const result = unitConverter.pxToPt("16px", basePixelSize);
        assert.equal(result, 12);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pxToPt("8px", basePixelSize);
        assert.equal(result, 6);
      });
    });
    describe("pxToPc", () => {
      it("should convert 16px to 6Pc", () => {
        const result = unitConverter.pxToPc("16px", basePixelSize);
        assert.equal(result, 6);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pxToPc("8px", basePixelSize);
        assert.equal(result, 3);
      });
    });
  });
}
function emConverterTests(basePixelSize: number) {
  describe("Em Conversions", () => {
    describe("emToPx", () => {
      it("should convert 1em to base pixel size", () => {
        const result = unitConverter.emToPx("1em", basePixelSize);
        assert.equal(result, basePixelSize);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.emToPx("0.5em", basePixelSize);
        assert.equal(result, basePixelSize / 2);
      });
    });
    describe("emToRem", () => {
      it("should convert 1em to 1em", () => {
        const result = unitConverter.emToRem("1em", basePixelSize);
        assert.equal(result, 1);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.emToRem("0.5em", basePixelSize);
        assert.equal(result, 0.5);
      });
    });
    describe("emToPt", () => {
      it("should convert 1em to 0.083pt", () => {
        const result = unitConverter.emToPt("1em", basePixelSize);
        assert.equal(result, 0.083);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.emToPt("0.5em", basePixelSize);
        assert.equal(result, 0.042);
      });
    });
    describe("emToPc", () => {
      it("should convert 1em to 0.167pc", () => {
        const result = unitConverter.emToPc("1em", basePixelSize);
        assert.equal(result, 0.167);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.emToPc("0.5em", basePixelSize);
        assert.equal(result, 0.083);
      });
    });
  });
}
function ptConverterTests(basePixelSize: number) {
  describe("Pt Conversions", () => {
    describe("ptToPx", () => {
      it("should convert 1pt to 1.388px", () => {
        const result = unitConverter.ptToPx("1pt", basePixelSize);
        assert.equal(result, 1.333);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.ptToPx("0.5pt", basePixelSize);
        assert.equal(result, 0.667);
      });
    });
    describe("ptToRem", () => {
      it("should convert 1pt to 0.063rem", () => {
        const result = unitConverter.ptToRem("1pt", basePixelSize);
        assert.equal(result, 0.063);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.ptToRem("0.5pt", basePixelSize);
        assert.equal(result, 0.031);
      });
    });
    describe("ptToEm", () => {
      it("should convert 1pt to 0.063em", () => {
        const result = unitConverter.ptToEm("1pt", basePixelSize);
        assert.equal(result, 0.063);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.ptToEm("0.5pt", basePixelSize);
        assert.equal(result, 0.031);
      });
    });
    describe("ptToPc", () => {
      it("should convert 1pt to 0.039pc", () => {
        const result = unitConverter.ptToPc("1pt", basePixelSize);
        assert.equal(result, 0.004);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.ptToPc("0.5pt", basePixelSize);
        assert.equal(result, 0.002);
      });
    });
  });
}
function pcConverterTests(basePixelSize: number) {
  describe("Pc Conversions", () => {
    describe("pcToPx", () => {
      it("should convert 1pc to 1.333px", () => {
        const result = unitConverter.pcToPx("1pc", basePixelSize);
        assert.equal(result, 1.333);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pcToPx("0.5pc", basePixelSize);
        assert.equal(result, 0.667);
      });
    });
    describe("pcToRem", () => {
      it("should convert 1pc to 1rem", () => {
        const result = unitConverter.pcToRem("1pc", basePixelSize);
        assert.equal(result, 1);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pcToRem("0.5pc", basePixelSize);
        assert.equal(result, 0.5);
      });
    });
    describe("pcToEm", () => {
      it("should convert 1pc to 1em", () => {
        const result = unitConverter.pcToEm("1pc", basePixelSize);
        assert.equal(result, 1);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pcToEm("0.5pc", basePixelSize);
        assert.equal(result, 0.5);
      });
    });
    describe("pcToPt", () => {
      it("should convert 1pc to 16pt", () => {
        const result = unitConverter.pcToPt("1pc", basePixelSize);
        assert.equal(result, 16);
      });
      it("should handle fractional values", () => {
        const result = unitConverter.pcToPt("0.5pc", basePixelSize);
        assert.equal(result, 8);
      });
    });
  });
}

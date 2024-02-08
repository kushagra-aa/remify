import * as assert from "assert";
import { remToPx } from "../../../helpers/converters";
import { getBaseFontSize } from "../../../helpers/getConfig";
import { extractValue } from "../../../helpers/stringHelpers";
import { describe, it } from "mocha";

export default function converterTests() {
  describe("Conversion functions", () => {
    const basePixelSize = extractValue(getBaseFontSize() || "16px"); // Use your desired base size

    describe("remToPx", () => {
      it("should convert 1rem to base pixel size", () => {
        const result = remToPx(1, basePixelSize);
        assert.equal(result, basePixelSize);
      });

      it("should handle fractional values", () => {
        const result = remToPx(0.5, basePixelSize);
        assert.equal(result, basePixelSize / 2);
      });
    });
  });
}

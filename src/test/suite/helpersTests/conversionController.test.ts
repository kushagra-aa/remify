import * as assert from "assert";
import { describe, it } from "mocha";
import conversionController from "../../../helpers/conversionController";

export default function conversionControllerTests() {
  describe("Conversion functions", () => {
    describe("Rem", () => {
      it("to Px", () => {
        const result = conversionController("1rem", "rem", "px");
        assert.equal(result, "16px");
      });
      it("to Em", () => {
        const result = conversionController("1rem", "rem", "em");
        assert.equal(result, "1em");
      });
      it("to Pt", () => {
        const result = conversionController("1rem", "rem", "pt");
        assert.equal(result, "1.333pt");
      });
      it("to Pt", () => {
        const result = conversionController("1rem", "rem", "pc");
        assert.equal(result, "2.667pc");
      });
    });
    describe("Px", () => {
      it("to Rem", () => {
        const result = conversionController("16px", "px", "rem");
        assert.equal(result, "1rem");
      });
      it("to Em", () => {
        const result = conversionController("16px", "px", "em");
        assert.equal(result, "1em");
      });
      it("to Pt", () => {
        const result = conversionController("16px", "px", "pt");
        assert.equal(result, "12pt");
      });
      it("to Pt", () => {
        const result = conversionController("16px", "px", "pc");
        assert.equal(result, "6pc");
      });
    });
    describe("Em", () => {
      it("to Rem", () => {
        const result = conversionController("1em", "em", "rem");
        assert.equal(result, "1rem");
      });
      it("to Px", () => {
        const result = conversionController("1em", "em", "px");
        assert.equal(result, "16px");
      });
      it("to Pt", () => {
        const result = conversionController("1em", "em", "pt");
        assert.equal(result, "0.083pt");
      });
      it("to Pt", () => {
        const result = conversionController("1em", "em", "pc");
        assert.equal(result, "0.167pc");
      });
    });
    describe("Pt", () => {
      it("to Rem", () => {
        const result = conversionController("1pt", "pt", "rem");
        assert.equal(result, "0.063rem");
      });
      it("to Em", () => {
        const result = conversionController("1pt", "pt", "em");
        assert.equal(result, "0.063em");
      });
      it("to Px", () => {
        const result = conversionController("1pt", "pt", "px");
        assert.equal(result, "1.333px");
      });
      it("to Pc", () => {
        const result = conversionController("1pt", "pt", "pc");
        assert.equal(result, "0.004pc");
      });
    });
    describe("Pc", () => {
      it("to Rem", () => {
        const result = conversionController("1pc", "pc", "rem");
        assert.equal(result, "1rem");
      });
      it("to Em", () => {
        const result = conversionController("1pc", "pc", "em");
        assert.equal(result, "1em");
      });
      it("to Px", () => {
        const result = conversionController("1pc", "pc", "px");
        assert.equal(result, "1.333px");
      });
      it("to Pt", () => {
        const result = conversionController("1pc", "pc", "pt");
        assert.equal(result, "16pt");
      });
    });
  });
}

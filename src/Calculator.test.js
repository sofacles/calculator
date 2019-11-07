import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { getNodeText } from "@testing-library/dom";
import Calculator from "./Calculator";

describe("Calculator tests", () => {
  it("updates display when you click 1", () => {
    let { getByTestId } = render(<Calculator />);
    let oneKey = getByTestId("1key");
    fireEvent.click(oneKey);

    const display = getByTestId("display");
    expect(getNodeText(display)).toEqual("1");
  });

  it("updates display when you click 1,0", () => {
    let { queryByText, getByTestId } = render(<Calculator />);
    let oneKey = queryByText("1");
    fireEvent.click(oneKey);

    let zeroKey = queryByText("0");
    fireEvent.click(zeroKey);

    const display = getByTestId("display");
    expect(getNodeText(display)).toEqual("10");
  });

  describe("Trimming leading zeros:", () => {
    it("Ignores zeros until you enter non-zero", () => {
      const { getByTestId } = render(<Calculator />);
      const zeroKey = getByTestId("0key");
      fireEvent.click(zeroKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("0");

      fireEvent.click(zeroKey);
      expect(getNodeText(display)).toEqual("0");

      fireEvent.click(getByTestId("5key"));
      expect(getNodeText(display)).toEqual("5");
    });

    it("Does not ignore zeros in the middle of the number", () => {
      const { getByTestId } = render(<Calculator />);
      const threeKey = getByTestId("3key");
      fireEvent.click(threeKey);
      const zeroKey = getByTestId("0key");
      fireEvent.click(zeroKey);
      fireEvent.click(threeKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("303");
    });

    it("Ignores leading zeros in second term", () => {
      const { getByTestId } = render(<Calculator />);
      const threeKey = getByTestId("3key");
      fireEvent.click(threeKey);

      const plusKey = getByTestId("+key");
      fireEvent.click(plusKey);

      const zeroKey = getByTestId("0key");
      fireEvent.click(zeroKey);
      fireEvent.click(threeKey);
      fireEvent.click(zeroKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("30");
    });
  });

  describe("Addition: ", () => {
    it("two plus two is four", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      const twoKey = queryByText("2");
      fireEvent.click(twoKey);

      const plusKey = queryByText("+");
      fireEvent.click(plusKey);

      fireEvent.click(twoKey);

      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("4");
    });

    it("can add multi-digit numbers", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      const twoKey = queryByText("2");
      fireEvent.click(twoKey);
      fireEvent.click(twoKey);

      const plusKey = queryByText("+");
      fireEvent.click(plusKey);

      const oneKey = getByTestId("1key");
      const zeroKey = getByTestId("0key");
      fireEvent.click(oneKey);
      fireEvent.click(zeroKey);
      fireEvent.click(oneKey);

      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("123");
    });

    it("doesn't clear the display after an operation, but waits for the first digit of new operand", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      const twoKey = queryByText("2");
      fireEvent.click(twoKey);

      const plusKey = queryByText("+");
      fireEvent.click(plusKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("2");

      fireEvent.click(getByTestId("7key"));

      expect(getNodeText(display)).toEqual("7");
    });
  });

  describe("Subtraction: ", () => {
    it("8 minus two is 6", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      const eightKey = getByTestId("8key");
      fireEvent.click(eightKey);

      const minusKey = getByTestId("-key");
      fireEvent.click(minusKey);

      fireEvent.click(getByTestId("2key"));

      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("6");
    });

    it("6 minus 8 is negative two", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      fireEvent.click(getByTestId("6key"));
      fireEvent.click(getByTestId("-key"));
      fireEvent.click(getByTestId("8key"));

      fireEvent.click(queryByText("enter"));

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("-2");
    });
  });

  describe("Multiplication: ", () => {
    it("3 times 7 is 21", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      let key3 = getByTestId("3key");
      fireEvent.click(key3);

      const timesKey = getByTestId("*key");
      fireEvent.click(timesKey);

      const key7 = getByTestId("7key");
      fireEvent.click(key7);

      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("21");
    });
    
    it("0 times 7 is 0", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      let key0 = getByTestId("0key");
      fireEvent.click(key0);

      const timesKey = getByTestId("*key");
      fireEvent.click(timesKey);

      const key7 = getByTestId("7key");
      fireEvent.click(key7);

      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("0");
    });
  });

  describe("Division: ", () => {
    it("12 / 3 is 4", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      let key1 = getByTestId("1key");
      fireEvent.click(key1);
      let key2 = getByTestId("2key");
      fireEvent.click(key2);

      const divideKey = getByTestId("/key");
      fireEvent.click(divideKey);

      let key3 = getByTestId("3key");
      fireEvent.click(key3);


      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("4");
    });
  });
});

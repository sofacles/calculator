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
  describe("Addition: ", () => {
    it("two plus two is four", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      let twoKey = queryByText("2");
      fireEvent.click(twoKey);

      let plusKey = queryByText("+");
      fireEvent.click(plusKey);

      fireEvent.click(twoKey);

      let enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      let display = getByTestId("display");
      expect(getNodeText(display)).toEqual("4");
    });
  });

  describe("Subtraction: ", () => {
    it("8 minus two is 6", () => {
      const { queryByText, getByTestId } = render(<Calculator />);
      let eightKey = getByTestId("8key");
      fireEvent.click(eightKey);

      let minusKey = getByTestId("-key");
      fireEvent.click(minusKey);

      fireEvent.click(getByTestId("2key"));

      let enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      let display = getByTestId("display");
      expect(getNodeText(display)).toEqual("6");
    });
  });
});

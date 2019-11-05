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
      const zeroKey = getByTestId("0key")
      fireEvent.click(oneKey);
      fireEvent.click(zeroKey);
      fireEvent.click(oneKey);

      const enterKey = queryByText("enter");
      fireEvent.click(enterKey);

      const display = getByTestId("display");
      expect(getNodeText(display)).toEqual("123");
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
  });
});

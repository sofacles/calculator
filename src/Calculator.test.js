import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { getNodeText } from "@testing-library/dom"
import Calculator from "./Calculator";

describe("Calculator tests", () => {
  it("updates display when you click 1", () => {
    let { queryByText, getByTestId } = render(<Calculator />);;
    let oneKey = queryByText("1");
    fireEvent.click(oneKey);
    
    const display = getByTestId("display");
    expect(getNodeText(display)).toEqual("1");
  });
});

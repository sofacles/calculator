import React, { useContext } from "react";
import { calculatorContext } from "./CalculatorContext";

const Display = () => {
  let [state] = useContext(calculatorContext);
  const displayStyle = {
    backgroundColor: "#dfd",
    border: "1px solid #333",
    height: "20px",
    margin: "4px",
    padding: "4px",
    textAlign: "right"
  };
  return (
    <div data-testid="display" style={displayStyle}>{state.stringCurrentlyBeingConcatenated}</div>
  );
};

export default Display;

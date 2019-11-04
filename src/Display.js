import React, { useContext } from "react";
import { calculatorContext } from "./CalculatorContext";

const Display = () => {
  let [state] = useContext(calculatorContext);
  const displayStyle = {
    border: "1px solid #333",
    height: "20px",
    margin: "4px"
  };
  return (
    <div style={displayStyle}>{state.stringCurrentlyBeingConcatenated}</div>
  );
};

export default Display;

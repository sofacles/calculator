import React from "react";
import Keypad from "./KeyPad";
import Display from "./Display";
import { CalculatorContextProvider } from "./CalculatorContext";

const Calculator = () => {
  const calculatorStyle = {
    backgroundColor: "#666",
    border: "1px solid black",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  };

  return (
    <div style={calculatorStyle}>
      <CalculatorContextProvider>
        <Display />
        <Keypad />
      </CalculatorContextProvider>
    </div>
  );
};

export default Calculator;

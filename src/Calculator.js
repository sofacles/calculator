import React from "react";
import Keypad from "./KeyPad";
import Display from "./Display";
import { CalculatorContextProvider } from "./CalculatorContext";

const Calculator = () => {
  const calculatorStyle = {
    display: "flex",
    flexDirection: "column"
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

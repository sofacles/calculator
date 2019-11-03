import React, { useReducer } from "react";
import Keypad from "./KeyPad";
import Display from "./Display";
import { CalculatorContextProvider } from "./CalculatorContext";
import InitialState from "./store/InitialState";

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

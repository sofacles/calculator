import React from "react";
import NumberKey from "./NumberKey";
import OperationKey from "./OperationKey";

const KeyPad = () => {
  const CalculatorStyle = {
    width: "240px"
  };

  const KeyPadRowStyle = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    WebkitJustifyContent: "space-around",
    WebkitFlexFlow: "row wrap",
    flexFlow: "row wrap",
    WebkitAlignItems: "stretch"
  };

  // It would be good to figure out a less brittle way to make one of the buttons 2x wider

  return (
    <div style={CalculatorStyle}>
      <div style={KeyPadRowStyle}>
        <NumberKey number={7} key={7} />
        <NumberKey number={8} key={8} />
        <NumberKey number={9} key={9} />
      </div>
      <div style={KeyPadRowStyle}>
        <NumberKey number={4} key={4} />
        <NumberKey number={5} key={5} />
        <NumberKey number={6} key={6} />
      </div>
      <div style={KeyPadRowStyle}>
        <NumberKey number={1} key={1} />
        <NumberKey number={2} key={2} />
        <NumberKey number={3} key={3} />
      </div>
      <div style={KeyPadRowStyle}>
        <NumberKey number={0} key={0} />
        {/* <EnterKey key="enter" />
            <NumberKey number={"."} key="decimal" /> */}
        <OperationKey text="+" opCode="ADD" key={"plus"} />
      </div>
    </div>
  );
};

export default KeyPad;

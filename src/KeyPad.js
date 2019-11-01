import React from "react";
import Key from "./Key";

const KeyPad = () => {
    const CalculatorStyle = {
        width: "200px"
    };

    const KeyPadRowStyle = {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        WebkitJustifyContent: "space-around",
        WebkitFlexFlow: "row wrap",
        flexFlow: "row wrap",
        WebkitAlignItems: "stretch"
    }

    // It would be good to figure out a less brittle way to make one of the buttons 2x wider
   

    return <div style={CalculatorStyle}>
        <div style={KeyPadRowStyle}>
            <Key operand={7} key={7} />
            <Key operand={8} key={8} />
            <Key operand={9} key={9} />
            <Key operand={"/"} key={"divide"} />
        </div>
        <div style={KeyPadRowStyle}>
            <Key operand={4} key={7} />
            <Key operand={5} key={8} />
            <Key operand={6} key={9} />
            <Key operand={"*"} key={"multiply"} />
        </div>
        <div style={KeyPadRowStyle}>
            <Key operand={1} key={7} />
            <Key operand={2} key={8} />
            <Key operand={3} key={9} />
            <Key operand={"-"} key={"minus"} />
        </div>
        <div style={KeyPadRowStyle}>
            <Key operand={0} key={"0"} wide={2} />
            <Key operand={"enter"} key="enter" />
            <Key operand={"+"} key={"plus"} />
        </div>
    </div>;
};

export default KeyPad;
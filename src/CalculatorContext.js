import React, { createContext, useState } from "react";
import InitialState from "./store/InitialState";



const calculatorContext = createContext([{}, () => {}]);

const CalculatorContextProvider = (props) => {
    const [state, setState] = useState({stringCurrentlyBeingConcatenated: "0"});
    debugger;
    return <calculatorContext.Provider value={[state, setState]} >
        {props.children}
    </calculatorContext.Provider>

}

export {calculatorContext, CalculatorContextProvider};

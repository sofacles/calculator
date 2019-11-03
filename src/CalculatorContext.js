import React, { createContext, useReducer } from "react";
import InitialState from "./store/InitialState";
import CalcReducer from "./store/CalcReducer";


const calculatorContext = createContext([{}, () => {}]);

const CalculatorContextProvider = (props) => {
    const [state, dispatch] = useReducer(CalcReducer, InitialState());
    debugger;
    return <calculatorContext.Provider value={[state, dispatch]} >
        {props.children}
    </calculatorContext.Provider>

}

export {calculatorContext, CalculatorContextProvider};

import React, {useState, useReducer} from 'react';
import CalcReducer from "./store/CalcReducer";
import InitialState from "./store/InitialState";

const UseCalcReducer = () => {
    debugger;
    const [calculatorState, setCalculatorState] = useState(InitialState());
debugger;
    const [state, dispatch] = useReducer(CalcReducer, calculatorState);

    return {state, dispatch};
};

export default UseCalcReducer;
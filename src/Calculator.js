import React, {useReducer} from 'react';
import Keypad from './KeyPad';
import Display from './Display';
import CalcReducer from "./store/CalcReducer";
import InitialState from "./store/InitialState"

const Calculator = () => {

    const [state, dispatch] = useReducer(CalcReducer, InitialState());
    const calculatorStyle = {
        display: "flex",
        flexDirection: "column"
    }
    return <div style={calculatorStyle}>
         <Display value={state.stringCurrentlyBeingConcatenated} />
      <Keypad />
    </div>
};

export default Calculator;
import React, { useContext } from "react";
//import UseCalcReducer from "./useCalcReducer";
import { calculatorContext } from "./CalculatorContext";
import Key from "./Key";


const NumberKey = (props) => {
    //const {state, dispatch} = UseCalcReducer();
    let [state, dispatch] = useContext(calculatorContext)
    const onPress = () => {
        debugger;
        dispatch({ type: "DIGIT", payload: props.number});
        // setState({...state,
        //     stringCurrentlyBeingConcatenated: state.stringCurrentlyBeingConcatenated.concat(props.number)});
    };

    return <>
         <Key onPress={onPress} operand={props.number} />
    </>;
}

export default NumberKey;
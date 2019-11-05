import React, { useContext } from "react";
import { calculatorContext } from "./CalculatorContext";
import Key from "./Key";


const NumberKey = (props) => {
   let [state, dispatch] = useContext(calculatorContext)
    const onPress = () => {
        dispatch({ type: "DIGIT", payload: props.number});
    };

    return <>
         <Key onPress={onPress} text={props.number} />
    </>;
}

export default NumberKey;
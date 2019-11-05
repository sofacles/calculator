import React, { useContext } from "react";
import { calculatorContext } from "./CalculatorContext";
import Key from "./Key";


export default (props) => {
   let [state, dispatch] = useContext(calculatorContext)
    const onPress = () => {
        dispatch({ type: "ENTER"});
    };

    return <>
         <Key onPress={onPress} text="enter" />
    </>;
}


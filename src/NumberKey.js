import React, { useContext } from "react";
import { calculatorContext } from "./CalculatorContext";
import Key from "./Key";


class NumberKey extends React.Component {
   constructor(props) {
    super(props);
   }

    onPress () {
        dispatch({ type: "DIGIT", payload: props.number});
    };

    render() {
        return <>
         <Key onPress={onPress} text={props.number} />
    </>;
    }
    
}

export default NumberKey;
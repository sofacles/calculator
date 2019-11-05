import React, { useContext} from "react";
import Key from "./Key";
import { calculatorContext } from "./CalculatorContext";

const OperationKey = (props) => {
    const [state, dispatch] = useContext(calculatorContext);
    const onPress = () => {
        dispatch({type: props.opCode});
    }
    return (
        <>
            <Key text="+" onPress={onPress} />
        </>
    );
};

export default OperationKey;
import React, { useContext} from "react";
import Key from "./Key";
import { calculatorContext } from "./CalculatorContext";

const AdditionKey = (props) => {
    const [state, dispatch] = useContext(calculatorContext);
    const onPress = () => {
        dispatch({type: "ADD"});
    }
    return (
        <>
            <Key operand="+" onPress={onPress} />
        </>
    );
};

export default AdditionKey;
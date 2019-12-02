import React, { useContext} from "react";
import Key from "./Key";
import { connect } from "react-redux";

const OperationKey = (props) => {
    return (
        <>
            <Key text={props.text} onPress={doOperation} />
        </>
    );
};


export default connect (null,
function(dispatch, props){
    return {
        doOperation: () => { dispatch({type: props.opCode})}
    }
})(OperationKey);
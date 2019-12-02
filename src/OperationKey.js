import React from "react";
import Key from "./Key";
import { connect } from "react-redux";

const OperationKey = ({ text, doOperation }) => {
  return <Key text={text} onPress={doOperation} />;
};

export default connect(null, function(dispatch, props) {
  return {
    doOperation: () => {
      dispatch({ type: props.opCode });
    }
  };
})(OperationKey);

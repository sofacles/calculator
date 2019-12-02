import React from "react";
import { connect } from "react-redux";
import Key from "./Key";

const NumberKey = props => {
  return <Key onPress={props.onNumberKey} text={props.number} />;
};

const mapStateToProps = function(state) {
  return { stringToDisplay: state.stringCurrentlyBeingConcatenated };
};
const mapDispatchToProps = function(dispatch, props) {
  return {
    onNumberKey: () => {
      dispatch({ type: "numberKey", payload: props.number });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberKey);

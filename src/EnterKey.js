import React from "react";
import Key from "./Key";
import { connect } from "react-redux";

const EnterKey = ({ command }) => {
  return <Key onPress={command} text="enter" />;
};

export default connect(null, function(dispatch) {
  return {
    command: () => {
      dispatch({ type: "ENTER" });
    }
  };
})(EnterKey);

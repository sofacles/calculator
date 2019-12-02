import React from "react";
import { connect } from "react-redux";
import KeyPad from "./KeyPadSmall";
const Calculator = ({ stringToDisplay }) => {
  return (
    <div>
      <div> {stringToDisplay} </div>
      <div>
        <KeyPad />
      </div>
    </div>
  );
};

const mapStateToProps = function(state) {
  return { stringToDisplay: state.stringCurrentlyBeingConcatenated };
};

export default connect(mapStateToProps)(Calculator);

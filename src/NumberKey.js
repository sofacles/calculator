import React, { useContext } from "react";
import { connect } from "react-redux";
import Key from "./Key";

class NumberKey extends React.Component {
  render() {
    return <Key onPress={this.props.onNumberKey} text={this.props.number} />;
  }
}
const mapStateToProps = function(state) {
  return { stringToDisplay: state.stringBeingDisplayed };
};
const mapDispatchToProps = function(dispatch, props) {
  return {
    onNumberKey: () => {
      dispatch({ type: "numberKey", payload: props.number });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberKey);

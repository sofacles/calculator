import React from "react";
import { connect } from "react-redux";
const Calculator = ({numberKey, stringToDisplay}) => {
    
    return (
      <div>
        <div> {stringToDisplay} </div>
        <div>
           <button onClick={e => {
             numberKey();
        }}>Add 7</button></div>
      </div>
    );
  
}

const mapStateToProps = function(state){
  return { stringToDisplay: state.stringBeingDisplayed}
};
const mapDispatchToProps = function(dispatch){
  return {
    numberKey: () => dispatch({type: "numberKey", payload: "7"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
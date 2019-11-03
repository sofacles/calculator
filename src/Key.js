import React from "react";

const Key = (props) => {

    const doubleWideStyle = {
        flexBasis: "47px",
        flexGrow: "2"
    };

    const KeyStyle = {
        border: "1px solid black",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        margin: "3px",
        flexGrow: "1",
        flexBasis: "10px"
    }
    return <div 
        style={ props.wide ? {...KeyStyle, ...doubleWideStyle} : KeyStyle  }
        onClick={props.onPress}
        >{props.operand}</div>
};

export default Key;

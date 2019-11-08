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
        margin: "3px",
        padding: "8px 0",
        flex: "1 1 0",
    }
    return <div 
    
        style={ KeyStyle  }
        data-testid={props.text + "key"}
        onClick={props.onPress}
        >{props.text}</div>
};

export default Key;

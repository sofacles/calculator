import React from "react";

const Key = (props) => {

    const KeyStyle = {
        backgroundColor: "#eee",
        border: "1px solid black",
        borderRadius: "4px",
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

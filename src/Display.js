import React from "react";

const Display = ({value}) => {

    const displayStyle = {
        border: "1px solid #333",
        margin: "4px"
    }
    return <div style={displayStyle}>{value}</div>
}

export default Display;
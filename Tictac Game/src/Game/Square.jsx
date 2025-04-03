import React from "react";

const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            style={{ border: "4px solid olive", height: "100px", width: "100%",display:"flex",justifyContent:"center", alignItems:"center" }}
            className="square">
            <h5>{props.value}</h5>
        </div>
    );
}

export default Square;
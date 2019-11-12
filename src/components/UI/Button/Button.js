import React from "react";
import "./Button.css";

const Button = props => {
    return (
        <button
            onClick={props.clicked}
            className={`Button  text-uppercase text-letterspacing`}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;

import React from "react";
import "./button.styles.css";

const Button = ({ children,small,center, ...otherProps}) => {
    return(
        <button className="Button">
            {children}
        </button>
    )
}

export default Button;
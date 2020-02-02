import * as React from 'react';

interface Props {
    type?: "button" | "submit",
    style?: { [attr:string]: string },
    children?: string
}

const Button = (props: Props) => {
    return (
        <button
            type={props.type}
            style={props.style}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: "button",
    children: "Button"
}

export default Button
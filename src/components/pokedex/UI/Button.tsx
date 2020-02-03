import * as React from 'react';

interface Props {
    className?: string,
    type?: "button" | "submit",
    style?: { [attr:string]: string },
    children?: any
}

const Button = (props: Props) => {
    return (
        <button
            {...props}
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
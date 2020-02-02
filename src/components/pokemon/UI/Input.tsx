import * as React from 'react'

interface Props {
    type?:        string,
    placeholder?: string,
    value?:       string,
    onChange?:     (e: React.FormEvent<HTMLInputElement>) => void;
    style?:       { [attr:string]: string },
}

const Input = (props: Props) => {
    const { type, placeholder, value, onChange, style } = props;
    return (
        <input
            style={style}
            onChange={onChange} 
            value={value}
            placeholder={placeholder} 
            type={type}
        />
    )
}

Input.defaultProps = {
    onChange: (e: React.FormEvent<HTMLInputElement>) => console.log(e.currentTarget.value),
    type: "text"
}

export default Input;
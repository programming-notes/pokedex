import * as React from 'react'

interface Props {
    className?:   string,
    type?:        string,
    placeholder?: string,
    name?:        string,
    value?:       string,
    onChange?:     (e: React.FormEvent<HTMLInputElement>) => void;
    style?:       { [attr:string]: string },
}

const Input = (props: Props) => {
    const { name, type, placeholder, value, onChange, style } = props;
    return (
        <input
            { ...props}
            autoComplete="off"
            name={name}
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
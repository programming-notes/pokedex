import * as React from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';
import PokemonProvider from '../PokemonProvider';

interface Props {
    action?: string,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    style?: { [attr:string]: string }
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    console.log("submitted!")
}

const PokemonForm = (props: Props) => {
    return (
        <form
            onSubmit={handleSubmit}
            action={props.action}
        >
            <Input />
            <Button type="submit">Search</Button>
        </form>
    )
}


export default PokemonForm;
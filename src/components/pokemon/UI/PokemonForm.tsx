import * as React from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';

interface Props {
    action?: string,
    setPokemonName: (name: string) => void,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    style?: { [attr:string]: string }
}

const PokemonForm = (props: Props) => {
    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                console.log(e.currentTarget);
                props.setPokemonName(e.currentTarget.pokemonName.value);
            }}
            action={props.action}
        >
            <Input name="pokemonName" />
            <Button type="submit">Search</Button>
        </form>
    )
}


export default PokemonForm;
import * as React from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';
import searchIcon from '../../../assets/search-icon.svg'

import {
    pokedexButton,
    pokemonForm, 
    pokedexInput } from '../PokedexView.module.css';

interface Props {
    action?: string,
    setPokemonName: (name: string) => void,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    style?: { [attr:string]: string }
}

const PokemonForm = (props: Props) => {
    console.log(searchIcon);
    return (
        <form
            className={pokemonForm}
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                props.setPokemonName(e.currentTarget.pokemonName.value);
            }}
            action={props.action}
        >
            <Input 
                className={pokedexInput}
                name="pokemonName" />
            <Button
                className={pokedexButton}
                type="submit"
            >
                <img style={{width: '100%', maxWidth: '2rem', maxHeight: '2rem'}} src={searchIcon} alt="search button" />
            </Button>
        </form>
    )
}


export default PokemonForm;
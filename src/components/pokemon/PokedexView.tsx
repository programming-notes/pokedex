import * as React from 'react';

import PokemonForm from './UI/PokemonForm';
import PokemonImage from './UI/PokemonImage';
import PokemonDescription from './UI/PokemonDescription';

import {
    pokemonDescription,
    pokeImageContainer,
    pokemonBio, } from './PokedexView.module.css';

const dummyBio: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

interface Props {
    pokeImgUrl: string,
    setPokemonName: (name: string) => void
}

class PokedexView extends React.Component<Props> {
    render() {
        return (
            <>
            <div style={{fontFamily: 'monospace'}} className="Pokedex">
                <PokemonForm setPokemonName={this.props.setPokemonName} />
                <div className={pokemonBio}>
                    <div className={pokeImageContainer}>
                        <PokemonImage
                            src={this.props.pokeImgUrl} 
                            alt="image of pokemon"
                        />
                    </div>
                    <PokemonDescription className={pokemonDescription}>
                        {dummyBio}
                    </PokemonDescription>
                </div>
            </div>
            </>
        )
    }
}

export default PokedexView;
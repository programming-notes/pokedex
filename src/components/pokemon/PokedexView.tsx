import * as React from 'react';

import PokemonForm from './UI/PokemonForm';
import PokemonImage from './UI/PokemonImage';

interface Props {
    pokeImgUrl: string,
    setPokemonName: (name: string) => void
}

class PokedexView extends React.Component<Props> {
    render() {
        return (
            <>
            <div className="Pokedex">
                <PokemonForm setPokemonName={this.props.setPokemonName} />
                <PokemonImage pokeImgUrl={this.props.pokeImgUrl} />
            </div>
            </>
        )
    }
}

export default PokedexView;
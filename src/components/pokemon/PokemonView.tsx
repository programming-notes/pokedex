import * as React from 'react';

import PokemonForm from './UI/PokemonForm';
import PokemonImage from './UI/PokemonImage';

interface Props {
    pokemonName: string,
    setPokemonName: (name: string) => void
}

class PokemonView extends React.Component<Props> {
    render() {
        console.log(this.props.pokemonName);
        return (
            <>  
                <div>Pokedex</div>
                <PokemonForm
                    setPokemonName={this.props.setPokemonName}
                />
                <PokemonImage pokemonName={this.props.pokemonName} />
            </>
        )
    }
}

export default PokemonView;
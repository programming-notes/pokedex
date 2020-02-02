import * as React from 'react';

interface Props {
    pokemonName: string
}

class PokemonImage extends React.Component<Props> {
    render() {
        const imgUrl = `http://www.pokestadium.com/sprites/xy/${this.props.pokemonName}.gif`;
        return <img src={imgUrl} alt={this.props.pokemonName} />
    }
}

export default PokemonImage;
import * as React from 'react';

interface Props {
    pokeImgUrl: string
}

class PokemonImage extends React.Component<Props> {
    render() {
        return <img src={this.props.pokeImgUrl} />
    }
}

export default PokemonImage;
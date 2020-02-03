import * as React from 'react';

interface Props {
    className?: string,
    src: string,
    alt: string
}

class PokemonImage extends React.Component<Props> {
    render() {
        return <img {...this.props} />
    }
}

export default PokemonImage;
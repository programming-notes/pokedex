import * as React from 'react';
import PokemonView from './PokemonView';

interface Props { 
    viewModel: any 
}

class PokemonController extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        this.state = {
            pokemonImage: '1',
            pokemonName: 'bulbasaur'
        };
    }


    render() {
        const { viewModel }:any  = this.props;

        return (
            <PokemonView {...viewModel} />
        )
    }
}

export default PokemonController;
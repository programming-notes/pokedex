import * as React from 'react';
import PokemonView from './PokemonView';

interface Props { 
    viewModel: any 
}

interface State {
    pokemonImage: string,
    pokemonName: string
}

class PokemonController extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            pokemonImage: '1',
            pokemonName: 'bulbasaur'
        };
    }

    setPokemonName = (name: string):void => (
        this.setState({ pokemonName: name.toLowerCase() })
    )


    render() {
        const { viewModel }:any  = this.props;

        return (
            <PokemonView
                pokemonName={this.state.pokemonName}
                setPokemonName={this.setPokemonName}
            />
        )
    }
}

export default PokemonController;
import * as React from 'react';
import PokemonView from './PokedexView';

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
        this.setState({ pokemonName: name })
    )


    render() {
        const { viewModel }:any  = this.props;
        const pokeImgUrl: string = viewModel.getPokeImgUrl(this.state.pokemonName);
        return (
            <PokemonView
                pokeImgUrl={pokeImgUrl}
                setPokemonName={this.setPokemonName}
            />
        )
    }
}

export default PokemonController;
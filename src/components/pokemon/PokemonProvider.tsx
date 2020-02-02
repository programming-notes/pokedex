import * as React from 'react';
import { inject } from 'mobx-react';

import RootStore from '../../models/RootStore';
import PokemonController from './PokemonController';
import PokemonViewModel from './PokemonViewModel';

interface Props { 
    [pokemon_model:string]: any
}


@inject(RootStore.type.POKEMON_MODEL)
class PokemonProvider extends React.Component<Props> {
    viewModel: PokemonViewModel

    constructor(props: Props) {
        super(props);
        const pokemonModel = props[RootStore.type.POKEMON_MODEL];
        this.viewModel = new PokemonViewModel(pokemonModel);
    }

    render() {
        console.log(this.props);
        return (
            <PokemonController viewModel={this.viewModel} />
        )
    }
}

export default PokemonProvider;
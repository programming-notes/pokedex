import * as React from 'react';

import PokemonForm from './UI/PokemonForm';

class PokemonView extends React.Component {
    render() {
        return (
            <>  
                <div>Pokedex</div>
                <PokemonForm />
            </>
        )
    }
}

export default PokemonView;
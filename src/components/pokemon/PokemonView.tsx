import * as React from 'react';

import Input from './UI/Input';

class PokemonView extends React.Component {
    render() {
        return (
            <>  
                <div>Pokedex</div>
                <Input />
            </>
        )
    }
}

export default PokemonView;
import * as React from 'react';

interface Props {
    className?: string
}

class PokemonDescription extends React.Component<Props, {}> {
    render() {
        return(
            <div {...this.props} >
                { this.props.children }
            </div>
        )
    }
}

export default PokemonDescription;
import * as React from 'react';
import { Provider } from 'mobx-react';
import PokemonProvider from './components/pokemon/PokemonProvider';
import RootStore from './models/rootStore';

const rootStore = new RootStore();

export interface App { compiler: string; framework: string }

export const App = (props: App) => (
    <Provider {...rootStore.getStore()}>
        <PokemonProvider />
    </Provider>
);
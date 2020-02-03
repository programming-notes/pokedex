import PokemonModel, { IPokemon } from './domain/PokedexModel';
import PokedexModel from './domain/PokedexModel';

interface StoreTypes {
    POKEDEX_MODEL: string
}

class RootStore {
    public static type:StoreTypes = {
        POKEDEX_MODEL: 'pokemonModel'
    }

    public pokedexModel: PokedexModel

    constructor() {
        this.pokedexModel = new PokedexModel();
    }


    public getStore = () => ({
        [RootStore.type.POKEDEX_MODEL]: this.pokedexModel
    })
}

export default RootStore;
import PokemonModel, { IPokemon } from './domain/PokmonModel';

interface StoreTypes {
    POKEMON_MODEL: string
}

class RootStore {
    public static type:StoreTypes = {
        POKEMON_MODEL: 'pokemonModel'
    }

    public pokemonModel: PokemonModel

    constructor() {
        this.pokemonModel = new PokemonModel();
    }


    public getStore = () => ({
        [RootStore.type.POKEMON_MODEL]: this.pokemonModel
    })
}

export default RootStore;
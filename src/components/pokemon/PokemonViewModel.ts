export default class PokemonViewModel {
    public store: any;

    constructor(pokemonStore: any) {
        this.store = pokemonStore;
    }

    public getPokemons = () => {
        return this.store.getPokemons()
    }

    public addPokemon = (pokemon: any): void => {
        this.store.addPokemon(pokemon);
    }
}
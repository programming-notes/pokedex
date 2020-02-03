export default class PokemonViewModel {
    public store: any;

    constructor(pokemonStore: any) {
        this.store = pokemonStore;
    }

    public getPokeImgUrl = (name: string): string => (
        `http://www.pokestadium.com/sprites/xy/${name.toLowerCase()}.gif`
    )

    public getPokemons = () => {
        return this.store.getPokemons()
    }

    public addPokemon = (pokemon: any): void => {
        this.store.addPokemon(pokemon);
    }
}
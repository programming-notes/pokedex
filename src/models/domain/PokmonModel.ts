import { observable, action } from 'mobx';
import * as uuid from 'uuid/v4';

export interface IPokemon {
    id: string,
    name: string
}

export default class PokemonModel {
    @observable pokemons: Array<IPokemon> = [];


    @action addPokemon(pokemon:IPokemon): void {
        this.pokemons.push({
            id: uuid(),
            ...pokemon
        })
    }


    public getPokemons = ():Array<IPokemon> => this.pokemons;
}
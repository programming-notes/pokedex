import { observable, action } from 'mobx';
import * as uuid from 'uuid/v4';

export interface IPokemon {
    id: string,
    name: string
}

export default class PokedexModel {
    private missingno: string = "https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png"
}
import type { Name, NamedAPIResource } from '../types';

export interface PokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

export interface GetPokemonColorParams {
  idOrName: string | number;
}

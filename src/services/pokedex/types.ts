import type { Name, NamedAPIResource } from '../types';

export interface Pokedex {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetPokedexParams {
  idOrName: string | number;
}

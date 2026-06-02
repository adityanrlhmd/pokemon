import type { Name, NamedAPIResource } from '../types';

export interface Upokedex {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUpokedexParams {
  idOrName: string | number;
}

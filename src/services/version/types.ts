import type { Name, NamedAPIResource } from '../types';

export interface Uversion {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUversionParams {
  idOrName: string | number;
}

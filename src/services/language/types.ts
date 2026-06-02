import type { Name, NamedAPIResource } from '../types';

export interface Ulanguage {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUlanguageParams {
  idOrName: string | number;
}

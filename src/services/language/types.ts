import type { Name, NamedAPIResource } from '../types';

export interface Language {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetLanguageParams {
  idOrName: string | number;
}

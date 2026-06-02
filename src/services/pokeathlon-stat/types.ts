import type { Name, NamedAPIResource } from '../types';

export interface UpokeathlonUstat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUpokeathlonUstatParams {
  idOrName: string | number;
}

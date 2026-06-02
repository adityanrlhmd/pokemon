import type { Name, NamedAPIResource } from '../types';

export interface UpalUparkUarea {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUpalUparkUareaParams {
  idOrName: string | number;
}

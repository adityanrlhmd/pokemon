import type { Name, NamedAPIResource } from '../types';

export interface Version {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetVersionParams {
  idOrName: string | number;
}

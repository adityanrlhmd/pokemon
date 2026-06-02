import type { Name, NamedAPIResource } from '../types';

export interface VersionGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetVersionGroupParams {
  idOrName: string | number;
}

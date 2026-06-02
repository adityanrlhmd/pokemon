import type { Name, NamedAPIResource } from '../types';

export interface UversionUgroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUversionUgroupParams {
  idOrName: string | number;
}

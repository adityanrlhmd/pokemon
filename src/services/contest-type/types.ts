import type { Name, NamedAPIResource } from '../types';

export interface ContestType {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetContestTypeParams {
  idOrName: string | number;
}

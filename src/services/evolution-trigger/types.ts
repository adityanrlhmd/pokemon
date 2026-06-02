import type { Name, NamedAPIResource } from '../types';

export interface UevolutionUtrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetUevolutionUtriggerParams {
  idOrName: string | number;
}

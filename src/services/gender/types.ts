import type { Name, NamedAPIResource } from '../types';

export interface Ugender {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetUgenderParams {
  idOrName: string | number;
}

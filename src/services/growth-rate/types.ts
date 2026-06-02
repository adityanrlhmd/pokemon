import type { Name, NamedAPIResource } from '../types';

export interface UgrowthUrate {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetUgrowthUrateParams {
  idOrName: string | number;
}

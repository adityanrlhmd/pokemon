import type { Name, NamedAPIResource } from '../types';

export interface GrowthRate {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetGrowthRateParams {
  idOrName: string | number;
}

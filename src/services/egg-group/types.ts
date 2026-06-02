import type { Name, NamedAPIResource } from '../types';

export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetEggGroupParams {
  idOrName: string | number;
}

import type { Name, NamedAPIResource } from '../types';

export interface Gender {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetGenderParams {
  idOrName: string | number;
}

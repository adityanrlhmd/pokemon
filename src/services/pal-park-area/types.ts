import type { Name, NamedAPIResource } from '../types';

export interface PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetPalParkAreaParams {
  idOrName: string | number;
}

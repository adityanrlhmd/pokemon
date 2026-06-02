import type { Name, NamedAPIResource } from '../types';

export interface Region {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetRegionParams {
  idOrName: string | number;
}

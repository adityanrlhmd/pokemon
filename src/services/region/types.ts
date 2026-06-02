import type { Name, NamedAPIResource } from '../types';

export interface Uregion {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetUregionParams {
  idOrName: string | number;
}

import type { Name, NamedAPIResource } from '../types';

export interface Ulocation {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetUlocationParams {
  idOrName: string | number;
}

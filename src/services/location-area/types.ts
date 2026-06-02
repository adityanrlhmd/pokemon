import type { Name, NamedAPIResource } from '../types';

export interface LocationArea {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetLocationAreaParams {
  idOrName: string | number;
}

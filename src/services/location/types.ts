import type { Name, NamedAPIResource } from '../types';

export interface Location {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetLocationParams {
  idOrName: string | number;
}

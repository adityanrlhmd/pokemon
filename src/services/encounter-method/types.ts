import type { Name, NamedAPIResource } from '../types';

export interface UencounterUmethod {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetUencounterUmethodParams {
  idOrName: string | number;
}

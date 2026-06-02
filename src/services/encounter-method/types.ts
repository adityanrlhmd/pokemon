import type { Name, NamedAPIResource } from '../types';

export interface EncounterMethod {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetEncounterMethodParams {
  idOrName: string | number;
}

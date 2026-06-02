import type { Name, NamedAPIResource } from '../types';

export interface UencounterUcondition {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetUencounterUconditionParams {
  idOrName: string | number;
}

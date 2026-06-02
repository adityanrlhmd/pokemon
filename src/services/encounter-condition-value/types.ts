import type { Name, NamedAPIResource } from '../types';

export interface UencounterUconditionUvalue {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetUencounterUconditionUvalueParams {
  idOrName: string | number;
}

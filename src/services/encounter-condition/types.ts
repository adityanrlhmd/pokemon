import type { Name, NamedAPIResource } from '../types';

export interface EncounterCondition {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetEncounterConditionParams {
  idOrName: string | number;
}

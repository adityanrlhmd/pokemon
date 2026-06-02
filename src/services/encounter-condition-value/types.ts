import type { Name, NamedAPIResource } from '../types';

export interface EncounterConditionValue {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetEncounterConditionValueParams {
  idOrName: string | number;
}

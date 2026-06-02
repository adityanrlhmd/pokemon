import type { Name, NamedAPIResource } from '../types';

export interface UlocationUarea {
  id: number;
  name: string;
  names: Name[];
  region?: NamedAPIResource | null;
  areas?: NamedAPIResource[];
  locations?: NamedAPIResource[];
}

export interface GetUlocationUareaParams {
  idOrName: string | number;
}

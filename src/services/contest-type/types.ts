import type { Name, NamedAPIResource } from '../types';

export interface UcontestUtype {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUcontestUtypeParams {
  idOrName: string | number;
}

import type { Name, NamedAPIResource } from '../types';

export interface UsuperUcontestUeffect {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetUsuperUcontestUeffectParams {
  idOrName: string | number;
}

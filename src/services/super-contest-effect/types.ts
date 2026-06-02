import type { Name, NamedAPIResource } from '../types';

export interface SuperContestEffect {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
  version_groups?: NamedAPIResource[];
}

export interface GetSuperContestEffectParams {
  idOrName: string | number;
}

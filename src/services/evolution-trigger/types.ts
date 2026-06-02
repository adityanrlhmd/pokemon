import type { Name, NamedAPIResource } from '../types';

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species?: NamedAPIResource[];
}

export interface GetEvolutionTriggerParams {
  idOrName: string | number;
}

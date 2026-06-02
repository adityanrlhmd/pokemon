import { pokemonApi } from '../api';
import type { GetEvolutionTriggerParams, EvolutionTrigger } from './types';

class EvolutionTriggerFetcher {
  getEvolutionTrigger({ idOrName }: GetEvolutionTriggerParams): Promise<EvolutionTrigger> {
    return pokemonApi.get(`/evolution-trigger/${idOrName}`);
  }
}
export const evolutionTriggerFetcher = new EvolutionTriggerFetcher();

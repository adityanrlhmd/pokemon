import { pokemonApi } from '../api';
import type { GetUevolutionUtriggerParams, UevolutionUtrigger } from './types';

class UevolutionUtriggerFetcher {
  getUevolutionUtrigger({ idOrName }: GetUevolutionUtriggerParams): Promise<UevolutionUtrigger> {
    return pokemonApi.get(`/evolution-trigger/${idOrName}`);
  }
}
export const evolutiontriggerFetcher = new UevolutionUtriggerFetcher();

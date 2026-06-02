import { pokemonApi } from '../api';
import type { GetStatParams, Stat } from './types';

class StatFetcher {
  getStat({ idOrName }: GetStatParams): Promise<Stat> {
    return pokemonApi.get(`/stat/${idOrName}`);
  }
}

export const statFetcher = new StatFetcher();

import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetNatureParams, Nature } from './types';

class NatureFetcher {
  getNatures(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/nature', { params: { limit: 100 } });
  }

  getNature({ idOrName }: GetNatureParams): Promise<Nature> {
    return pokemonApi.get(`/nature/${idOrName}`);
  }
}

export const natureFetcher = new NatureFetcher();

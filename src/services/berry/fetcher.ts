import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { Berry, GetBerryParams } from './types';

class BerryFetcher {
  getBerries(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/berry', { params: { limit: 100 } });
  }

  getBerry({ idOrName }: GetBerryParams): Promise<Berry> {
    return pokemonApi.get(`/berry/${idOrName}`);
  }
}

export const berryFetcher = new BerryFetcher();

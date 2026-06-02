import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetTypeDetailParams, PokemonType } from './types';

class TypeFetcher {
  getTypes(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/type', { params: { limit: 100 } });
  }

  getTypeDetail({ idOrName }: GetTypeDetailParams): Promise<PokemonType> {
    return pokemonApi.get(`/type/${idOrName}`);
  }
}

export const typeFetcher = new TypeFetcher();

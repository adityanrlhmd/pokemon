import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetMoveParams, GetMovesParams, Move } from './types';

class MoveFetcher {
  getMoves(params: GetMovesParams = {}): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/move', { params });
  }

  getMove({ idOrName }: GetMoveParams): Promise<Move> {
    return pokemonApi.get(`/move/${idOrName}`);
  }
}

export const moveFetcher = new MoveFetcher();

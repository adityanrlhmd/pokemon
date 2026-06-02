import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { Generation, GetGenerationParams } from './types';

class GenerationFetcher {
  getGenerations(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/generation', { params: { limit: 100 } });
  }

  getGeneration({ idOrName }: GetGenerationParams): Promise<Generation> {
    return pokemonApi.get(`/generation/${idOrName}`);
  }
}

export const generationFetcher = new GenerationFetcher();

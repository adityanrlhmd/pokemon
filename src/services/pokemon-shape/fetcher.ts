import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetPokemonShapeParams, PokemonShape } from './types';

class PokemonShapeFetcher {
  getPokemonShapes(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/pokemon-shape');
  }

  getPokemonShape({ idOrName }: GetPokemonShapeParams): Promise<PokemonShape> {
    return pokemonApi.get(`/pokemon-shape/${idOrName}`);
  }
}

export const pokemonShapeFetcher = new PokemonShapeFetcher();

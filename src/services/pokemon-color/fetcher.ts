import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetPokemonColorParams, PokemonColor } from './types';

class PokemonColorFetcher {
  getPokemonColors(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/pokemon-color');
  }

  getPokemonColor({ idOrName }: GetPokemonColorParams): Promise<PokemonColor> {
    return pokemonApi.get(`/pokemon-color/${idOrName}`);
  }
}

export const pokemonColorFetcher = new PokemonColorFetcher();

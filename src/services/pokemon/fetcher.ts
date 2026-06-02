import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetPokemonDetailParams, GetPokemonsParams, Pokemon } from './types';

class PokemonFetcher {
  getPokemons(params: GetPokemonsParams = {}): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/pokemon', { params });
  }

  getPokemonDetail({ idOrName }: GetPokemonDetailParams): Promise<Pokemon> {
    return pokemonApi.get(`/pokemon/${idOrName}`);
  }
}

export const pokemonFetcher = new PokemonFetcher();

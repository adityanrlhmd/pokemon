import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetPokemonHabitatParams, PokemonHabitat } from './types';

class PokemonHabitatFetcher {
  getPokemonHabitats(): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/pokemon-habitat');
  }

  getPokemonHabitat({ idOrName }: GetPokemonHabitatParams): Promise<PokemonHabitat> {
    return pokemonApi.get(`/pokemon-habitat/${idOrName}`);
  }
}

export const pokemonHabitatFetcher = new PokemonHabitatFetcher();

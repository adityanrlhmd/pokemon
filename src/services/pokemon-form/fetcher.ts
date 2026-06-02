import { pokemonApi } from '../api';
import type { GetPokemonFormParams, PokemonForm } from './types';

class PokemonFormFetcher {
  getPokemonForm({ idOrName }: GetPokemonFormParams): Promise<PokemonForm> {
    return pokemonApi.get(`/pokemon-form/${idOrName}`);
  }
}

export const pokemonFormFetcher = new PokemonFormFetcher();

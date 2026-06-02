import { pokemonApi } from '../api';
import type { GetPokemonSpeciesParams, PokemonSpecies } from './types';

class PokemonSpeciesFetcher {
  getPokemonSpecies({ idOrName }: GetPokemonSpeciesParams): Promise<PokemonSpecies> {
    return pokemonApi.get(`/pokemon-species/${idOrName}`);
  }
}

export const pokemonSpeciesFetcher = new PokemonSpeciesFetcher();

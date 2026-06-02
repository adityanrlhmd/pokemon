import { pokemonApi } from '../api';
import type { GetPokeathlonStatParams, PokeathlonStat } from './types';

class PokeathlonStatFetcher {
  getPokeathlonStat({ idOrName }: GetPokeathlonStatParams): Promise<PokeathlonStat> {
    return pokemonApi.get(`/pokeathlon-stat/${idOrName}`);
  }
}
export const pokeathlonstatFetcher = new PokeathlonStatFetcher();

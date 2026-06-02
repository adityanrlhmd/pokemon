import { pokemonApi } from '../api';
import type { GetUpokeathlonUstatParams, UpokeathlonUstat } from './types';

class UpokeathlonUstatFetcher {
  getUpokeathlonUstat({ idOrName }: GetUpokeathlonUstatParams): Promise<UpokeathlonUstat> {
    return pokemonApi.get(`/pokeathlon-stat/${idOrName}`);
  }
}
export const pokeathlonstatFetcher = new UpokeathlonUstatFetcher();

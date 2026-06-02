import { pokemonApi } from '../api';
import type { GetUpokedexParams, Upokedex } from './types';

class UpokedexFetcher {
  getUpokedex({ idOrName }: GetUpokedexParams): Promise<Upokedex> {
    return pokemonApi.get(`/pokedex/${idOrName}`);
  }
}
export const pokedexFetcher = new UpokedexFetcher();

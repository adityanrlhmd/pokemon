import { pokemonApi } from '../api';
import type { GetPokedexParams, Pokedex } from './types';

class PokedexFetcher {
  getPokedex({ idOrName }: GetPokedexParams): Promise<Pokedex> {
    return pokemonApi.get(`/pokedex/${idOrName}`);
  }
}
export const pokedexFetcher = new PokedexFetcher();

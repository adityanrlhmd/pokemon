import { pokemonApi } from '../api';
import type { GetUlanguageParams, Ulanguage } from './types';

class UlanguageFetcher {
  getUlanguage({ idOrName }: GetUlanguageParams): Promise<Ulanguage> {
    return pokemonApi.get(`/language/${idOrName}`);
  }
}
export const languageFetcher = new UlanguageFetcher();

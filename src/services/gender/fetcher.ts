import { pokemonApi } from '../api';
import type { GetUgenderParams, Ugender } from './types';

class UgenderFetcher {
  getUgender({ idOrName }: GetUgenderParams): Promise<Ugender> {
    return pokemonApi.get(`/gender/${idOrName}`);
  }
}
export const genderFetcher = new UgenderFetcher();

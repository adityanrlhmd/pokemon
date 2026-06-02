import { pokemonApi } from '../api';
import type { GetUregionParams, Uregion } from './types';

class UregionFetcher {
  getUregion({ idOrName }: GetUregionParams): Promise<Uregion> {
    return pokemonApi.get(`/region/${idOrName}`);
  }
}
export const regionFetcher = new UregionFetcher();

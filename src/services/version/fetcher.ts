import { pokemonApi } from '../api';
import type { GetUversionParams, Uversion } from './types';

class UversionFetcher {
  getUversion({ idOrName }: GetUversionParams): Promise<Uversion> {
    return pokemonApi.get(`/version/${idOrName}`);
  }
}
export const versionFetcher = new UversionFetcher();

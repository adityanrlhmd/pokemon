import { pokemonApi } from '../api';
import type { GetUitemUpocketParams, UitemUpocket } from './types';

class UitemUpocketFetcher {
  getUitemUpocket({ idOrName }: GetUitemUpocketParams): Promise<UitemUpocket> {
    return pokemonApi.get(`/item-pocket/${idOrName}`);
  }
}
export const itempocketFetcher = new UitemUpocketFetcher();

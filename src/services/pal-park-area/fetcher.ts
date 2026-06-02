import { pokemonApi } from '../api';
import type { GetUpalUparkUareaParams, UpalUparkUarea } from './types';

class UpalUparkUareaFetcher {
  getUpalUparkUarea({ idOrName }: GetUpalUparkUareaParams): Promise<UpalUparkUarea> {
    return pokemonApi.get(`/pal-park-area/${idOrName}`);
  }
}
export const palparkareaFetcher = new UpalUparkUareaFetcher();

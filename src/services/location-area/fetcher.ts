import { pokemonApi } from '../api';
import type { GetUlocationUareaParams, UlocationUarea } from './types';

class UlocationUareaFetcher {
  getUlocationUarea({ idOrName }: GetUlocationUareaParams): Promise<UlocationUarea> {
    return pokemonApi.get(`/location-area/${idOrName}`);
  }
}
export const locationareaFetcher = new UlocationUareaFetcher();

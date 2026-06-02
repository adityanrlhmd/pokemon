import { pokemonApi } from '../api';
import type { GetUlocationParams, Ulocation } from './types';

class UlocationFetcher {
  getUlocation({ idOrName }: GetUlocationParams): Promise<Ulocation> {
    return pokemonApi.get(`/location/${idOrName}`);
  }
}
export const locationFetcher = new UlocationFetcher();

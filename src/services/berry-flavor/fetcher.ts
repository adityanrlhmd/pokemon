import { pokemonApi } from '../api';
import type { GetUberryUflavorParams, UberryUflavor } from './types';

class UberryUflavorFetcher {
  getUberryUflavor({ idOrName }: GetUberryUflavorParams): Promise<UberryUflavor> {
    return pokemonApi.get(`/berry-flavor/${idOrName}`);
  }
}
export const berryflavorFetcher = new UberryUflavorFetcher();

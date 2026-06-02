import { pokemonApi } from '../api';
import type { GetBerryFlavorParams, BerryFlavor } from './types';

class BerryFlavorFetcher {
  getBerryFlavor({ idOrName }: GetBerryFlavorParams): Promise<BerryFlavor> {
    return pokemonApi.get(`/berry-flavor/${idOrName}`);
  }
}
export const berryFlavorFetcher = new BerryFlavorFetcher();

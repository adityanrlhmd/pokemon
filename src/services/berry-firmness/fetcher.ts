import { pokemonApi } from '../api';
import type { GetBerryFirmnessParams, BerryFirmness } from './types';

class BerryFirmnessFetcher {
  getBerryFirmness({ idOrName }: GetBerryFirmnessParams): Promise<BerryFirmness> {
    return pokemonApi.get(`/berry-firmness/${idOrName}`);
  }
}
export const berryFirmnessFetcher = new BerryFirmnessFetcher();

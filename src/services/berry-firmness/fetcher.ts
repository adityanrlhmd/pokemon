import { pokemonApi } from '../api';
import type { GetUberryUfirmnessParams, UberryUfirmness } from './types';

class UberryUfirmnessFetcher {
  getUberryUfirmness({ idOrName }: GetUberryUfirmnessParams): Promise<UberryUfirmness> {
    return pokemonApi.get(`/berry-firmness/${idOrName}`);
  }
}
export const berryfirmnessFetcher = new UberryUfirmnessFetcher();

import { pokemonApi } from '../api';
import type { GetUcontestUtypeParams, UcontestUtype } from './types';

class UcontestUtypeFetcher {
  getUcontestUtype({ idOrName }: GetUcontestUtypeParams): Promise<UcontestUtype> {
    return pokemonApi.get(`/contest-type/${idOrName}`);
  }
}
export const contesttypeFetcher = new UcontestUtypeFetcher();

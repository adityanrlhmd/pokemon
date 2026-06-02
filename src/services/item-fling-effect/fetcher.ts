import { pokemonApi } from '../api';
import type { GetUitemUflingUeffectParams, UitemUflingUeffect } from './types';

class UitemUflingUeffectFetcher {
  getUitemUflingUeffect({ idOrName }: GetUitemUflingUeffectParams): Promise<UitemUflingUeffect> {
    return pokemonApi.get(`/item-fling-effect/${idOrName}`);
  }
}
export const itemflingeffectFetcher = new UitemUflingUeffectFetcher();

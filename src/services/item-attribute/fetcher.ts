import { pokemonApi } from '../api';
import type { GetUitemUattributeParams, UitemUattribute } from './types';

class UitemUattributeFetcher {
  getUitemUattribute({ idOrName }: GetUitemUattributeParams): Promise<UitemUattribute> {
    return pokemonApi.get(`/item-attribute/${idOrName}`);
  }
}
export const itemattributeFetcher = new UitemUattributeFetcher();

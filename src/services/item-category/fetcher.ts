import { pokemonApi } from '../api';
import type { GetUitemUcategoryParams, UitemUcategory } from './types';

class UitemUcategoryFetcher {
  getUitemUcategory({ idOrName }: GetUitemUcategoryParams): Promise<UitemUcategory> {
    return pokemonApi.get(`/item-category/${idOrName}`);
  }
}
export const itemcategoryFetcher = new UitemUcategoryFetcher();

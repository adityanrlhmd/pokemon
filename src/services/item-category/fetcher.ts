import { pokemonApi } from '../api';
import type { GetItemCategoryParams, ItemCategory } from './types';

class ItemCategoryFetcher {
  getItemCategory({ idOrName }: GetItemCategoryParams): Promise<ItemCategory> {
    return pokemonApi.get(`/item-category/${idOrName}`);
  }
}
export const itemCategoryFetcher = new ItemCategoryFetcher();

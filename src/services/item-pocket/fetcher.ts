import { pokemonApi } from '../api';
import type { GetItemPocketParams, ItemPocket } from './types';

class ItemPocketFetcher {
  getItemPocket({ idOrName }: GetItemPocketParams): Promise<ItemPocket> {
    return pokemonApi.get(`/item-pocket/${idOrName}`);
  }
}
export const itemPocketFetcher = new ItemPocketFetcher();

import { pokemonApi } from '../api';
import type { GetItemFlingEffectParams, ItemFlingEffect } from './types';

class ItemFlingEffectFetcher {
  getItemFlingEffect({ idOrName }: GetItemFlingEffectParams): Promise<ItemFlingEffect> {
    return pokemonApi.get(`/item-fling-effect/${idOrName}`);
  }
}
export const itemFlingEffectFetcher = new ItemFlingEffectFetcher();

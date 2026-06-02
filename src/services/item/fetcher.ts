import { pokemonApi } from '../api';
import type { NamedAPIResource, PaginatedResponse } from '../types';
import type { GetItemParams, GetItemsParams, Item } from './types';

class ItemFetcher {
  getItems(params: GetItemsParams = {}): Promise<PaginatedResponse<NamedAPIResource>> {
    return pokemonApi.get('/item', { params });
  }

  getItem({ idOrName }: GetItemParams): Promise<Item> {
    return pokemonApi.get(`/item/${idOrName}`);
  }
}

export const itemFetcher = new ItemFetcher();

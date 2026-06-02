import { pokemonApi } from '../api';
import type { GetItemAttributeParams, ItemAttribute } from './types';

class ItemAttributeFetcher {
  getItemAttribute({ idOrName }: GetItemAttributeParams): Promise<ItemAttribute> {
    return pokemonApi.get(`/item-attribute/${idOrName}`);
  }
}
export const itemAttributeFetcher = new ItemAttributeFetcher();

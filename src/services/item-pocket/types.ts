import type { Description, Name, NamedAPIResource } from '../types';

export interface ItemPocket {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetItemPocketParams {
  idOrName: string | number;
}

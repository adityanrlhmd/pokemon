import type { Description, Name, NamedAPIResource } from '../types';

export interface ItemFlingEffect {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetItemFlingEffectParams {
  idOrName: string | number;
}

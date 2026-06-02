import type { Description, Name, NamedAPIResource } from '../types';

export interface ItemCategory {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetItemCategoryParams {
  idOrName: string | number;
}

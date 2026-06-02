import type { Description, Name, NamedAPIResource } from '../types';

export interface ItemAttribute {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetItemAttributeParams {
  idOrName: string | number;
}

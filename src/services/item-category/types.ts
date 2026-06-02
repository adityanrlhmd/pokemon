import type { Description, Name, NamedAPIResource } from '../types';

export interface UitemUcategory {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetUitemUcategoryParams {
  idOrName: string | number;
}

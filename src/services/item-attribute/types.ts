import type { Description, Name, NamedAPIResource } from '../types';

export interface UitemUattribute {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetUitemUattributeParams {
  idOrName: string | number;
}

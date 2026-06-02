import type { Description, Name, NamedAPIResource } from '../types';

export interface UitemUpocket {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetUitemUpocketParams {
  idOrName: string | number;
}

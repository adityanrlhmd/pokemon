import type { Description, Name, NamedAPIResource } from '../types';

export interface UitemUflingUeffect {
  id: number;
  name: string;
  items?: NamedAPIResource[];
  names: Name[];
  descriptions?: Description[];
}

export interface GetUitemUflingUeffectParams {
  idOrName: string | number;
}

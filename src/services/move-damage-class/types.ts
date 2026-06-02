import type { Description, Name } from '../types';

export interface MoveDamageClass {
  id: number;
  name: string;
  descriptions: Description[];
  moves: import('../types').NamedAPIResource[];
  names: Name[];
}
export interface GetMoveDamageClassParams {
  idOrName: string | number;
}

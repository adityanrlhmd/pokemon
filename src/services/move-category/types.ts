import type { Description, NamedAPIResource } from '../types';

export interface MoveCategory {
  id: number;
  name: string;
  moves: NamedAPIResource[];
  descriptions: Description[];
}
export interface GetMoveCategoryParams {
  idOrName: string | number;
}

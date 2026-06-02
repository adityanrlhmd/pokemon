import type { Description, Name, NamedAPIResource } from '../types';

export interface MoveTarget {
  id: number;
  name: string;
  descriptions: Description[];
  moves: NamedAPIResource[];
  names: Name[];
}
export interface GetMoveTargetParams {
  idOrName: string | number;
}

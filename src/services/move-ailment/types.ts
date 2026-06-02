import type { Name, NamedAPIResource } from '../types';

export interface MoveAilment {
  id: number;
  name: string;
  moves: NamedAPIResource[];
  names: Name[];
}

export interface GetMoveAilmentParams {
  idOrName: string | number;
}

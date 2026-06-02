import type { Description, Name } from '../types';

export interface MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  version_groups: import('../types').NamedAPIResource[];
}
export interface GetMoveLearnMethodParams {
  idOrName: string | number;
}

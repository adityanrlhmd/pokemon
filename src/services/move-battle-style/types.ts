import type { Name } from '../types';

export interface MoveBattleStyle {
  id: number;
  name: string;
  names: Name[];
}
export interface GetMoveBattleStyleParams {
  idOrName: string | number;
}

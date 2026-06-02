import type { NamedAPIResource } from '../types';

export interface Machine {
  id: number;
  item: NamedAPIResource;
  move: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface GetMachineParams {
  id: number;
}

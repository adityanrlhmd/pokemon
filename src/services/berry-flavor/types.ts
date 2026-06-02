import type { Name, NamedAPIResource } from '../types';

export interface BerryFlavor {
  id: number;
  name: string;
  names: Name[];
  berries: NamedAPIResource[];
}
export interface GetBerryFlavorParams {
  idOrName: string | number;
}

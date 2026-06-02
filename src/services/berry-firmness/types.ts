import type { Name, NamedAPIResource } from '../types';

export interface BerryFirmness {
  id: number;
  name: string;
  names: Name[];
  berries: NamedAPIResource[];
}
export interface GetBerryFirmnessParams {
  idOrName: string | number;
}

import type { Name, NamedAPIResource } from '../types';

export interface UberryUfirmness {
  id: number;
  name: string;
  names: Name[];
  berries: NamedAPIResource[];
}
export interface GetUberryUfirmnessParams {
  idOrName: string | number;
}

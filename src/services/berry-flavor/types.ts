import type { Name, NamedAPIResource } from '../types';

export interface UberryUflavor {
  id: number;
  name: string;
  names: Name[];
  berries: NamedAPIResource[];
}
export interface GetUberryUflavorParams {
  idOrName: string | number;
}

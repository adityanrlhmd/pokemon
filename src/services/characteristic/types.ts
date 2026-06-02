import type { Description, NamedAPIResource } from '../types';

export interface Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: NamedAPIResource;
  descriptions: Description[];
}

export interface GetCharacteristicParams {
  id: number;
}

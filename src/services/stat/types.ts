import type { APIResource, Name, NamedAPIResource } from '../types';

export interface Stat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: {
    increase: Array<{ change: number; move: NamedAPIResource }>;
    decrease: Array<{ change: number; move: NamedAPIResource }>;
  };
  affecting_natures: {
    increase: NamedAPIResource[];
    decrease: NamedAPIResource[];
  };
  characteristics: APIResource[];
  move_damage_class: NamedAPIResource | null;
  names: Name[];
}

export interface GetStatParams {
  idOrName: string | number;
}

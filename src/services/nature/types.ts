import type { Name, NamedAPIResource } from '../types';

export interface NaturePokeathlonStatChange {
  max_change: number;
  pokeathlon_stat: NamedAPIResource;
}

export interface NatureStatChange {
  max_change: number;
  move_battle_style: NamedAPIResource;
}

export interface Nature {
  id: number;
  name: string;
  decreased_stat: NamedAPIResource | null;
  increased_stat: NamedAPIResource | null;
  hates_flavor: NamedAPIResource | null;
  likes_flavor: NamedAPIResource | null;
  pokeathlon_stat_changes: NaturePokeathlonStatChange[];
  move_battle_style_preferences: NatureStatChange[];
  names: Name[];
}

export interface GetNatureParams {
  idOrName: string | number;
}

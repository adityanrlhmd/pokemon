import type { FlavorText, Name, NamedAPIResource, VerboseEffect } from '../types';

export interface ItemFlavorText extends FlavorText {
  version_group: NamedAPIResource;
}

export interface ItemSprites {
  default: string | null;
}

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number | null;
  fling_effect: NamedAPIResource | null;
  attributes: NamedAPIResource[];
  category: NamedAPIResource;
  effect_entries: VerboseEffect[];
  flavor_text_entries: ItemFlavorText[];
  game_indices: Array<{ game_index: number; generation: NamedAPIResource }>;
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: Array<{
    pokemon: NamedAPIResource;
    version_details: Array<{ rarity: number; version: NamedAPIResource }>;
  }>;
  baby_trigger_for: { url: string } | null;
  machines: Array<{ machine: { url: string }; version_group: NamedAPIResource }>;
}

export interface GetItemParams {
  idOrName: string | number;
}
export interface GetItemsParams {
  limit?: number;
  offset?: number;
}

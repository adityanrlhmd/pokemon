import type { NamedAPIResource } from '../types';

export interface PokemonSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  other: {
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
  };
}

export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: Array<{
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }>;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: Array<{
    rarity: number;
    version: NamedAPIResource;
  }>;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  held_items: PokemonHeldItem[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  species: NamedAPIResource;
  cries: {
    latest: string;
    legacy: string;
  };
}

export interface GetPokemonsParams {
  limit?: number;
  offset?: number;
}

export interface GetPokemonDetailParams {
  idOrName: string | number;
}
